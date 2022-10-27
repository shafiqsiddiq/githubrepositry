import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

const MyDataTableSimple = (props) => {
  return (
    <div>
      <BootstrapTable
        className="GenericBootstrapTable"
        keyField="id"
        data={props && props.data}
        columns={props && props.columns}
        headerWrapperClasses="table-header"
        pagination={
          props && props.tablePagination === "false" ? "" : paginationFactory()
        }
        bordered={false}
        striped
        classes="myvitals-table text-center"
        hover
        condensed
      />
    </div>
  );
};

export default MyDataTableSimple;
