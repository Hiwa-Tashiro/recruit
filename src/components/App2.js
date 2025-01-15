import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";
import Papa from 'papaparse';

function App2() {
  const [cookies] = useCookies();
  const [filename, setFilename] = useState();
  const [data, setData] = useState([]);

  const inputfile = useRef(null);
  async function selectFile(e) {
    e.preventDefault();
    const datafile = inputfile.current.files[0];
    if (datafile) {
      const reader = new FileReader()

      reader.onload = (event) => {
        const readerfile = event.target.result;

        Papa.parse(readerfile, {
          header: true,
          skipEmptyLines: true, // 空行をスキップ
          complete: async(result) => {
            const url = "https://y9zs7kouqi.execute-api.ap-northeast-1.amazonaws.com/dev/registStudents";
            await fetch(url, {
              method: "POST",
              headers: { Authorization: cookies.token },
              body: JSON.stringify({
                tabledata: result.data,
                recruit_year: cookies.recruit_year,
                filename: datafile?.name,
                user: cookies.user,
                functionid: 'SC01',
              })
            })
              .then((res) => res.json()) // JSON形式に変換
              .then((data) => {
                console.log(data);
                if (data?.errorMesseage) {
                  alert(data?.errorMesseage);
                }
                else{
                  alert("アップロードに成功しました");
                }
              })
              .catch((error) => {
                console.log(error)
                alert("アップロードに失敗しました");
              }); // エラー発生時に出力
          },
          error: (error) => {
            console.error('Error while parsing CSV:', error);
          },
        });
      }
      reader.readAsText(datafile, 'Shift-JIS')
    }


    window.location.reload();
  }


  return (
    <div>
      <div>
        <div>{cookies.recruit_year}</div>
        <div><Link to='/home'>Home(データなし)</Link></div>
        <div><Link to='/home' state={{ student_id: 65535 }}>Home(データあり)</Link></div>
      </div>
      <br />
      <form onSubmit={selectFile}>
        <input type="file" accept="text/csv" ref={inputfile} />
        <button type="submit">CSV読み込み</button>
      </form>
      <br />
      <div>{filename || null}</div>
    </div>
  )
}

export default App2;