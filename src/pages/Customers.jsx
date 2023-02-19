import React, { useState, useEffect } from "react";

import Table from "../components/table/Table";
import * as customerView from "../api/Customer/viewCustomers";

const customerTableHead = ["Mã", "Ngày mua", "Tổng tiền"];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.date}</td>
    <td>{item.totalAmount}</td>
  </tr>
);

const Customers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      //loading = true
      const result = await customerView.view();
      setData(result);
      console.log("Staffs API: ", result);
      //loading = false
    };
    fetchApi();
  }, []);

  return (
    <div>
      <h2 className="page-header">Lịch sử đơn hàng</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table
                limit="10"
                headData={customerTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={data}
                renderBody={(item, index) => renderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
