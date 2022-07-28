import { Button, Drawer } from "antd";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./style.module.css";

import { Card } from "antd";
import {
  CheckCircleOutlined,
  BankOutlined,
  DollarCircleOutlined,
  UploadOutlined,
  FormOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

const ClassifyButton = () => {
  const { Meta } = Card;
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div>
        <Button
          // type="button"
          hoverable
          onClick={showDrawer}
          className={styles.buttonClear}
          style={{
            margin: "0",
            fontFamily: "inherit",
            fontSize: "inherit",
            lineHeight: "inherit",
            margin: "0px",
            padding: "0px",
          }}
          id="classify"
          title="Classify"
        >
          Classify
        </Button>
        <Drawer
          width={"300px"}
          title="Classify"
          placement="left"
          onClose={onClose}
          visible={visible}
        >
          <div>
            <h2>Transactions</h2>
            <div className={styles.transactions}>
              <div>
                <Link to="/transaction/list-transactions">
                  <Card
                    hoverable
                    cover={
                      <DollarCircleOutlined
                        style={{
                          color: "#1d3557f2",
                          fontSize: "48px",
                        }}
                      />
                    }
                  >
                    <Meta title="Transactions List" />
                  </Card>
                </Link>
              </div>
              <div>
                <Link to="/upload-csv">
                  <Card
                    hoverable
                    cover={
                      <UploadOutlined
                        style={{
                          color: "#1d3557f2",
                          fontSize: "48px",
                        }}
                      />
                    }
                  >
                    <Meta title="Upload csv file" />
                  </Card>
                </Link>
              </div>
              <div>
                <Link to="/transaction/manual/create">
                  <Card
                    hoverable
                    cover={
                      <FormOutlined
                        style={{
                          color: "#1d3557f2",
                          fontSize: "48px",
                        }}
                      />
                    }
                  >
                    <Meta title="Add transaction" />
                  </Card>
                </Link>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "25px" }}>
            <h2>Settings</h2>
            <div className={styles.transactions}>
              <Link to="/profile">
                <Card
                  hoverable
                  cover={
                    <PieChartOutlined
                      style={{
                        color: "#1d3557f2",
                        fontSize: "48px",
                      }}
                    />
                  }
                >
                  <Meta title="Profile" />{" "}
                </Card>
              </Link>
              <Link to="/category/page-category">
                <Card
                  hoverable
                  cover={
                    <CheckCircleOutlined
                      style={{
                        color: "#1d3557f2",
                        fontSize: "48px",
                      }}
                    />
                  }
                >
                  <Meta title="Categories" />{" "}
                </Card>
              </Link>
              <Link to="/my-banks">
                <Card
                  hoverable
                  cover={
                    <BankOutlined
                      style={{
                        color: "#1d3557f2",
                        fontSize: "48px",
                      }}
                    />
                  }
                >
                  <Meta title="Bank Statement Templates" />
                </Card>
              </Link>
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default ClassifyButton;
