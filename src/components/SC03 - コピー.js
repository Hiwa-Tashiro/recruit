import '../css/SC03.css';
import React from "react";
import { Return } from '../ui-components';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function SC03() {
  const [data, setData] = useState({});
  const [num, setNum] = useState(0);
  const [jobfair, setJobfair] = useState([]);
  const [spot, setSpot] = useState([]);
  const handleClick = () => { navigate("/"); };
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies();
  const [errorMesseage, setErrorMesseage] = useState({});
  const [popup, setPopup] = useState({});

  const [rows, setRows] = useState([]);
  // 初期データ
  useEffect(() => {
    const fetchlambda = async () => {
      const url = "https://y9zs7kouqi.execute-api.ap-northeast-1.amazonaws.com/dev/sc03_default";
      await fetch(url,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: cookies.token
          },
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
      first.push({
        num: item["num"],
        jobfair_id: item["jobfair_id"],
        date: item["date"],
        spot: item["spot"],
        jobfair_is_cancel: item["jobfair_is_cancel"],
        is_update: false,
        updated_at: item['updated_at']
      }),
      firstnum = firstnum + 1
    ));
    setNum(firstnum);
    setRows(first)
  }, [jobfair])

  const updateJobfair = async () => {
    const validateForm = () => {
      let errorMesseage = {};
      try {
        rows.forEach((row) => {
          if (row['date'] == null) {
            errorMesseage.index = row['num'];
            errorMesseage.messeage = <span className="required">日時は必須です。</span>;
            throw errorMesseage;
          }
        });
        return errorMesseage;
      }
      catch (errorMesseage) {
        return errorMesseage;
      }
      finally {
        setErrorMesseage(errorMesseage);
      }
    }

    const formErrors = await validateForm();
    if (Object.keys(formErrors).length > 0) {
      return;
    }

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
              function_id: 'SC03',
            })
        }
      )
        .then((res) => res.json()) // JSON形式に変換
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.log(error)); // エラー発生時に出力
    }
    await fetchlambda();

    await window.location.reload();
  };

  // 行を追加する関数
  const addRow = () => {
    const newRow = { num: num, jobfair_id: null, date: null, spot: 0, jobfair_is_cancel: 0 };
    setNum(num + 1);
    setRows([...rows, newRow]);
  };

  // 行のデータを変更する関数
  const updateRow = (index, key, value) => {
    const updatedRows = [...rows];
    updatedRows[index][key] = value;
    updatedRows[index]["is_update"] = true;
    setRows(updatedRows);
    console.log(rows);
  };

  const openPopup = (index, row_jobfair_id) => {
    setPopup({
      ispopup: true,
      index: index,
      row_jobfair_id: row_jobfair_id
    })
  }


  const deleteRow = async (delete_flag) => {
    if (delete_flag) {
      if (popup.row_jobfair_id) {
        const jobfair = rows[popup.index];
        const url = "https://y9zs7kouqi.execute-api.ap-northeast-1.amazonaws.com/dev/delateJobfair";
        const response = await fetch(url,
          {
            method: "POST",
            headers: { Authorization: cookies.token },
            body: JSON.stringify(
              {
                jobfair: jobfair,
                user: cookies.user,
                function_id: 'SC03',
              })
          }
        )
          .then((res) => res.json()) // JSON形式に変換
          .then((data) => {
            console.log(data);
            return data;
          })
          .catch((error) => console.log(error)); // エラー発生時に出力

        if (response.errorMesseage) {
          alert(response.errorMesseage);
        }
        else {
          const daletedRows = [...rows].filter((row, row_index) => row_index !== popup.index);
          setRows(daletedRows)
        }

      }
      else {
        const daletedRows = [...rows].filter((row, row_index) => row_index !== popup.index);
        setRows(daletedRows)
      }
    }

    setPopup({ ispopup: false })
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
      <div className="header">
        <div classspot="Return">
          <button onClick={handleClick}><Return data={data} /></button>
        </div>
        <h1>会社説明会</h1>
        <div classspot="Return" className="updatecontent">
          <button onClick={updateJobfair} className="updatebutton">
            <div class="buttoncontent">登録</div>
          </button>
        </div>
      </div>
      <div className="jobfair">
        <table border="1">
          <thead>
            <tr>
              <th style={{ zIndex: 3 }}>
                <button onClick={addRow} class="addbutton">
                  +
                </button>
              </th>
              <th>日時</th>
              <th>会場</th>
              <th>ステータス</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row.num} className={row.jobfair_is_cancel == 1 ? "cancelrow" : null}>
                <th style={{ backgroundColor: "white", border: "none" }}></th>
                <td>
                  <input
                    type="datetime-local"
                    value={row.date}
                    onChange={(e) => updateRow(index, "date", e.target.value)}
                  />
                  {errorMesseage.index == row.num && <p className="error-message">{errorMesseage.messeage}</p>}
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
                  <button onClick={() => openPopup(index, row.jobfair_id)} class="deletebutton">
                    削除
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {popup?.ispopup && (
          <div className="popup">
            <div className="popup-content">
              <p>削除しますか？</p>
              <button className="confirm-button" onClick={() => deleteRow(true)}>削除する</button>
              <button className="cancel-button" onClick={() => deleteRow(false)}>キャンセル</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SC03;
