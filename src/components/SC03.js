import '../css/SC03.css';
import React from "react";
import { Return } from '../ui-components';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function SC03() {
  const [data, setData] = useState();
  const [num, setNum] = useState(0);
  const [jobfair, setJobfair] = useState([]);
  const [spot, setSpot] = useState([]);
  const handleClick = () => { navigate("/"); };
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies();

  const [rows, setRows] = useState([]);
  // 初期データ
  useEffect(() => {
    const fetchlambda = async () => {
      const url = "https://y9zs7kouqi.execute-api.ap-northeast-1.amazonaws.com/dev/sc03_default";
      await fetch(url,
        {
          method: "POST",
          headers: { Authorization: cookies.token },
          body: JSON.stringify(
            {
              recruit_year: cookies.recruit_year
            })
        }
      )
        .then((res) => res.json()) // JSON形式に変換
        .then((data) => {
          console.log(data);
          setJobfair(data["jobfair"]);
          setSpot(data["spot"])
        })
        .catch((error) => console.log(error)); // エラー発生時に出力

    }

    fetchlambda();
  }, [])

  useEffect(() => {
    const first = [];
    let firstnum = num;
    jobfair?.map((item) => (
      item["num"] = firstnum,
      first.push(
        {num:item["num"], jobfair_id: item["jobfair_id"], date: item["date"], spot: item["spot"], jobfair_is_cancel: item["jobfair_is_cancel"] }
      ),
      firstnum = firstnum + 1
    ));
    setNum(firstnum);
    setRows(first)
  }, [jobfair])

  const updateJobfair = () => {
    let errorMesseage = null;
    rows.map((row) => {
      if(!row['date']){
        return
      }
    });

    const fetchlambda = async () => {
      const url = "https://y9zs7kouqi.execute-api.ap-northeast-1.amazonaws.com/dev/updateJobfair";
      await fetch(url,
        {
          method: "POST",
          headers: { Authorization: cookies.token },
          body: JSON.stringify(
            {
              recruit_year: cookies.recruit_year,
              jobfair_list: rows,
              user: cookies.user,
              function_id:'SC03',
            })
        }
      )
        .then((res) => res.json()) // JSON形式に変換
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.log(error)); // エラー発生時に出力
    }
    fetchlambda();
  };

  // 行を追加する関数
  const addRow = () => {
    const newRow = {num:num , jobfair_id: null, date: null, spot: 0, jobfair_is_cancel: 0 };
    setNum(num + 1);
    setRows([...rows, newRow]);
  };

  // 行のデータを変更する関数
  const updateRow = (index, key, value) => {
    const updatedRows = [...rows];
    updatedRows[index][key] = value;
    setRows(updatedRows);
    console.log(rows);
  };

  const deleteRow = (index,row_jobfair_id) => {
    if(!row_jobfair_id){
      console.log(index);
      const daletedRows = [...rows].filter((row,row_index) => row_index !== index);
      setRows(daletedRows)
    }
  };

  const selectCheckbox = (index, key, value, checked) => {
    if (checked) {
      value = 1;
    }
    else {
      value = 0;
    }
    updateRow(index, key, value);
  };

  return (
    <div>
      <div classspot="Return">
        <button onClick={handleClick}><Return data={data} /></button>
      </div>

      <div classspot="Return">
        <button onClick={updateJobfair}>update</button>
      </div>

      <div class="jobfairtable">
        <button onClick={addRow} class="addbutton">
          Add Row
        </button>
        <table border="1">
          <thead>
            <tr>
              <th>日時</th>
              <th>会場</th>
              <th>ステータス</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row.num}>
                <td>
                  <input
                    type="datetime-local"
                    value={row.date}
                    onChange={(e) => updateRow(index, "date", e.target.value)}
                  />
                </td>
                <td>
                  <select
                    value={row.spot}
                    onChange={(e) => updateRow(index, "spot", e.target.value)}
                  >
                    {spot?.map((option) => {
                      return (
                        <option key={option.spot_num} value={option.spot_num}>
                          {option.spot_name}
                        </option>
                      );
                    })}
                  </select>
                </td>
                <td>
                  <input
                    type="checkbox"
                    value={row.jobfair_is_cancel}
                    checked={row.jobfair_is_cancel}
                    onChange={(e) => selectCheckbox(index, "jobfair_is_cancel", e.target.value, e.target.checked)}
                  />
                  中止
                </td>
                <td>
                  <button onClick={(e) => deleteRow(index,row.jobfair_id)} class="addbutton">
                    削除
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SC03;
