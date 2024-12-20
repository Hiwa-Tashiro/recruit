import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";
import Papa from 'papaparse';

function App2() {
  const inputfile = useRef(null);
  const [cookies] = useCookies();
  const [filename, setFilename] = useState();
  const [data, setData] = useState([]);

  async function selectFile(e) {
    e.preventDefault();
    const datafile = inputfile.current.files[0];
    if (datafile) {
      setFilename(datafile?.name)
      const reader = new FileReader()

      reader.onload = (event) => {
        const readerfile = event.target.result;

        Papa.parse(readerfile, {
          header: true, // CSVのヘッダー行をキーとして扱う
          skipEmptyLines: true, // 空行をスキップ
          complete: (result) => {
            setData(result.data); // パースしたデータを保存
            const url = "https://y9zs7kouqi.execute-api.ap-northeast-1.amazonaws.com/dev/recruitlambda3";
            fetch(url, {
              method: "POST",
              headers: { Authorization: cookies.token },
              body: JSON.stringify({
                  tabledata:result.data,
                  user: cookies.user
              })
            })
            .then((res) => res.json()) // JSON形式に変換
            .then((data) => {
              console.log(data);
            })
            .catch((error) => console.log(error)); // エラー発生時に出力
          },
          error: (error) => {
            console.error('Error while parsing CSV:', error);
          },
        });
      }
      reader.readAsText(datafile, 'Shift-JIS')
    }
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
      <div>
        <table>
          <thead>
            <tr>
              <th>名前</th>
              <th>フリガナ</th>
              <th>メールアドレス</th>
              <th>学校名</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr>
                  <td>{item['姓']} {item['名']}</td>
                  <td>{item['姓カナ']} {item['名カナ']}</td>
                  <td>{item['メールアドレス（メイン）']}</td>
                  <td>{item['学校名']}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App2;