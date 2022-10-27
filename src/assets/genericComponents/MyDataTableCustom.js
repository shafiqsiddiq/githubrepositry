import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { Col, Row } from "react-bootstrap";
import paginationFactory from "react-bootstrap-table2-paginator";

const MyDataTableCustom = (props) => {
  // debugger
  const { SearchBar } = Search;
  const rowClasses = "bg-white border-0 shadow";
  const { tableHeading, search, headerContent, data, columns, showHeader } =
    props;
  return (
    <Row>
      <Col sm={12}>
        <div className="my-data-table-custom">
          <ToolkitProvider keyField="id" data={data} columns={columns} search>
            {(props) => (
              <div>
                {(showHeader === undefined || showHeader === true) && (
                  <Row className="shadow my-data-custom-table-header py-4 mb-3 rounded align-items-center">
                    <Col sm={12} md={12}>
                      {tableHeading}
                    </Col>
                    {headerContent}
                  </Row>
                )}
                <Row className="justify-content-end">
                  <Col sm={12} md={4}>
                    {search === true && (
                      <div className="d-flex justify-content-end align-items-center custom-table-searchbar">
                        <SearchBar {...props.searchProps} />
                      </div>
                    )}
                  </Col>
                </Row>
                <BootstrapTable
                  {...props.baseProps}
                  bootstrap4
                  keyField="id"
                  classes="table-styling"
                  bordered={false}
                  noDataIndication="No data Found"
                  pagination={paginationFactory()}
                  rowClasses={rowClasses}
                  headerWrapperClasses="my-data-table-custom-header"
                />
              </div>
            )}
          </ToolkitProvider>
        </div>
      </Col>
    </Row>
  );
};

export default MyDataTableCustom;
