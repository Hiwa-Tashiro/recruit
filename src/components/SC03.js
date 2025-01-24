import SC03_css from '../css/SC03.module.css';
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
  const [editingcalender, setEditingcalender] = useState();
  const handleClick = () => { navigate("/"); };
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies();
  const [errorMesseages, seterrorMesseages] = useState([]);
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
        student_count: item["student_count"],
        updated_at: item['updated_at']
      }),
      firstnum = firstnum + 1
    ));
    setNum(firstnum);
    setRows(first)
  }, [jobfair])

  //更新ボタン
  const updateJobfair = async () => {
    if(errorMesseages.length > 0){
      alert("編集が必要な項目があります。");
      return
    }
    const validateForm = () => {
      let errorMesseage = {};
      try {
        rows.forEach((row) => {
          if (row['date'] == null) {
            errorMesseage.num = row['num'];
            errorMesseage.status = 1;
            errorMesseage.messeage = <span className={SC03_css.required}>日時は必須です。</span>;
            throw errorMesseage;
          }
        });
        return errorMesseage;
      }
      catch (errorMesseage) {
        return errorMesseage;
      }
      finally {
        seterrorMesseages([...errorMesseages, errorMesseage]);
      }
    }

    const formErrors = await validateForm();
    if (Object.keys(formErrors).length > 0) {
      alert("編集が必要な項目があります。");
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
          window.location.reload();
        })
        .catch((error) => console.log(error)); // エラー発生時に出力
    }
    await fetchlambda();
  };

  //行追加
  const addRow = () => {
    const newRow = { num: num, jobfair_id: null, date: null, spot: 0, jobfair_is_cancel: 0 };
    setNum(num + 1);
    setRows([...rows, newRow]);
  };

  //日付のフォーマッタ
  const formatDate = (date) =>{
    let formatdate = null;
    if(date){
      const date1 = new Date(date)
      formatdate = String(new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()));
    }
    return formatdate;
  }

  //行のデータの変更
  const updateRow = (index, key, value) => {
    const updatedRows = [...rows];
    updatedRows[index][key] = value;
    updatedRows[index]["is_update"] = true;
    if(key == "date"){
      let newErrorMesseages = [...errorMesseages]
      if(errorMesseages.find((item) => item.num == updatedRows[index].num)?.status == 1){
        newErrorMesseages = newErrorMesseages.filter((item) => item.num != updatedRows[index].num)
      }
      updatedRows.forEach((row) => {
        if(row.date) {
          if(updatedRows.filter((item) => item.num != row.num).find((item) => formatDate(item.date) == formatDate(row.date))){
            let errorMesseage = {}
            errorMesseage.num = row['num'];
            errorMesseage.status = 2;
            errorMesseage.messeage = <span className={SC03_css.required}>同じ日付が存在します。</span>;
            newErrorMesseages = [...newErrorMesseages, errorMesseage]
          }
          if(!updatedRows.filter((item) => item.num != row.num).find((item) => formatDate(item.date) == formatDate(row.date)) && errorMesseages.find((item) => item.num == row.num)){
            newErrorMesseages = newErrorMesseages.filter((item) => item.num != row.num)
          }
        }
      })
      seterrorMesseages(newErrorMesseages)
    }
    setRows(updatedRows);
  };
  
  //ポップアップ
  const openPopup = (index, row) => {
    if(rows[index]["student_count"] && rows[index]["student_count"] > 0){
      alert("説明会を予約している学生がいます。")
      return
    }
    setPopup({
      ispopup: true,
      index: index,
      num: row.num,
      row_jobfair_id: row.jobfair_id,
      date: row.date
    })
  }


  //行削除
  const deleteRow = async (delete_flag) => {
    if (delete_flag) {
      const daletedRows = [...rows].filter((row, row_index) => row_index !== popup.index);
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
          return;
        }
      }

      setRows(daletedRows)

      if (popup.date) {
        let newErrorMesseages = [...errorMesseages].filter((item) => item.num != popup.num)
        daletedRows.forEach((row) => {
          if(row.date) {
            if(!daletedRows.filter((item) => item.num != row.num).find((item) => formatDate(item.date) == formatDate(row.date)) && errorMesseages.find((item) => item.num == row.num)){
              newErrorMesseages = newErrorMesseages.filter((item) => item.num != row.num)
            }
          }
        })
        seterrorMesseages(newErrorMesseages)
      }
    }

    setPopup({ ispopup: false })
  };

  //表示の日付フォーマッタ
  const formatJapaneseDate = (datetime) => {
    if (!datetime) return "日付を入力してください";

    const date = new Date(datetime);
    const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];

    const month = String(date.getMonth() + 1).padStart(2, "0"); // 月 (0-11なので+1)
    const day = String(date.getDate()).padStart(2, "0");
    const dayOfWeek = daysOfWeek[date.getDay()];
    const hours = String(date.getHours()).padStart(2, "0");   // 2桁表示
    const minutes = String(date.getMinutes()).padStart(2, "0"); // 2桁表示

    return `${month}月${day}日 (${dayOfWeek}) ${hours}:${minutes}`;
  };

  const selectCheckbox = (index, key, value, checked) => {
    if(rows[index]["student_count"] && rows[index]["student_count"] > 0){
      alert("説明会を予約している学生がいます。")
      return
    }
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
      <div className={SC03_css.header}>
        <div className={SC03_css.return}>
          <button onClick={handleClick} className={SC03_css.backbutton}>
            <div className={SC03_css.buttoncontent}>戻る</div>
            </button>
        </div>
        <h1>会社説明会</h1>
        <div classspot="Return" className={SC03_css.updatecontent}>
          <button onClick={updateJobfair} className={SC03_css.updatebutton}>
            <div className={SC03_css.buttoncontent}>登録</div>
          </button>
        </div>
      </div>
      <div className={SC03_css.jobfair}>
        <table className={SC03_css.jobfairtable} border="1">
          <thead>
            <tr>
              <th style={{ zIndex: 3 }}>
                <button onClick={addRow} className={SC03_css.addbutton}>
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
              <tr key={row.num} className={row.jobfair_is_cancel == 1 ? SC03_css.cancelrow : null}>
                <th style={{ backgroundColor: "white", border: "none" }}></th>
                <td>
                  {editingcalender == row.num ? (
                    <input
                      type="datetime-local"
                      value={row.date}
                      onChange={(e) => updateRow(index, "date", e.target.value)}
                      onBlur={() => setEditingcalender(null)}
                      autoFocus
                    />
                  ) : (
                    <div
                    className={SC03_css.calender}
                    onClick={() => setEditingcalender(row.num)}
                    >{formatJapaneseDate(row.date)}</div>
                  )
                  }
                  {errorMesseages.find((item) => item.num == row.num) && <p>{errorMesseages.find((item) => item.num == row.num).messeage}</p>}
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
                  <button onClick={() => openPopup(index, row)} className={SC03_css.deletebutton}>
                    削除
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {popup?.ispopup && (
          <div className={SC03_css.popup}>
            <div className={SC03_css.popup_content}>
              <p>削除しますか？</p>
              <button className={SC03_css.confirm_button} onClick={() => deleteRow(true)}>はい</button>
              <button className={SC03_css.cancel_button} onClick={() => deleteRow(false)}>いいえ</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SC03;
