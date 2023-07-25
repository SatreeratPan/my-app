import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import P1 from "./P1";
import P2 from "./P2";
import P3 from "./P3";
import Contact from "./Contact";
import { Container, Button, Table } from "react-bootstrap";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

export function Layout() {
  return (
    <nav className="be-secondary p-2 md-3">
      <img str="card-07.jpg" alt="My logo" />
      <NavLink
        to="/"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        หน้าเเรก
      </NavLink>
      <NavLink
        to="/product"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        ตารางเทียบแคลอรี่
      </NavLink>
      <NavLink
        to="/Contact"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        ผู้จัดทํา
      </NavLink>
    </nav>
  );
}

function Index() {
  return (
    <>
      <Layout />
      <div className="text-center">
        <img str="IMG_5991.JPG" alt="หมี่กะทิ" />
        <h3>หมี่กะทิ</h3>
        <div>
        หมี่กะทิ เป็นอาหารพื้นเมืองที่มีสรรพคุณต่อสุขภาพ 
        ตามวิถีภูมิปัญญาท้องถิ่น ของจังหวัดอุบลราชธานี
         ที่ได้สืบทอดกันมารุ่นต่อรุ่น มีส่วนผสมจากวัตถุดิบธรรมชาติที่มีในท้องถิ่น 
         มีความโดดเด่นและมีเอกลักษณ์เฉพาะที่มีความประณีตสวยงาม 
        หมี่กะทิของอุบลราชธานีจะไม่ใช้เส้นหมี่เหมือนภาคกลาง 
        เนื่องจากชาวอีสาน จะทำเส้นก๋วยเตี๋ยวขึ้นเอง ซึ่งเรียกว่า 
        "หมี่" คล้ายกับเส้นเล็กของทางภาคกลาง 
        </div>
        <Button onclick={P1}>เรียนรู้เพิ่มเติม</Button>
      </div>
      <div className="text-center">
        <img str="f0801.jpg" alt="ผัดไทยหมื่นปีห่อใบบัว" />
        <h3>ผัดไทยหมื่นปีห่อใบบัว</h3>
        <div>
        ผัดไทยเป็นอาหารพื้นเมืองที่มีสรรพคุณต่อสุขภาพ ตามวิถีภูมิปัญญาท้องถิ่น
        ของจังหวัดอุบลราชธานี ที่ได้สืบทอดกันมารุ่นต่อรุ่น 
        มีความโดดเด่นและมีความเป็นเอกลักษณ์ที่มีความประณีตสวยงาม
         ของจังหวัดอุบลราชธานี
         มีความเป็นธรรมชาติของส่วนผสมหลักและเครื่องปรุงรส 
         เป็นอาหารที่ให้คุณค่าทางโภชนาการ และมีสารอาหารครบ 
         5 หมู่ ที่มีประโยชน์ต่อร่างกายครบถ้วน
        </div>
        <Button onClick={P2}>เรียนรู้เพิ่มเติม</Button>
      </div>
      <div className="text-center">
        <img str="f0901.jpg" alt="แกงอ่อมหอยขม" />
        <h3>แกงอ่อมหอยขม</h3>
        <div>
       แกงอ่อมหอยขม เป็นอาหารพื้นเมืองที่มีสรรพคุณต่อสุขภาพ 
        เป็นแกงอ่อมอาหารพื้นเมืองที่อุดมไปด้วยคุณค่าทางโภชนาการเพราะส่วนประกอบ
        หลักส่วนใหญ่เป็นผักและสมุนไพรพื้นบ้านนานาชนิดเป็นความผสมผสานที่ลงตัวระหว่างชนิดของอาหาร 
        และเครื่องปรุง มีเสน่ห์ของความเป็นไทย ต้นตำรับเมนูสมุนไพรโบราณที่มีมาช้านานของจังหวัดอุบลราชธานี 
        โดยการนำหอยขมหรือหอยจุ๊บที่อยู่ในแหล่งน้ำตามธรรมชาติ มีคุณค่าทางโภชนาการเป็นแหล่งโปรตีน และคอลาเจน 
        ที่มีประโยชน์ต่อร่างกาย
        </div>
        <Button onClick={P3}>เรียนรู้เพิ่มเติม</Button>
      </div>
    </>
  );
}

function Product() {
  const table = useRef();
  const tr = useRef([]);
  const DeleteRow = (i) => {
    const index = tr.current[i].rowIndex;
    table.current.DeleteRow(index);
  };

  const data = [
    ["หมี่กะทิ", 350],
    ["ผัดไทยหมื่นปีห่อใบบัว", 450],
    ["แกงอ่อมหอยขม", 550],
  ];

  return (
    <>
      <Layout />
      <h4>ตารางเทียบแคลอรี่</h4>
      <Table striped bordered hover className="my-3" ref={table}>
        <thead>
          <tr>
            <th>ชื่ออาหาร</th>
            <th>แคลอรี่</th>
            <th>เทียบแคลอรี่</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr
                ref={(el) => {
                  tr.current[i] = el;
                }}
                ker={i}
              >
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td className="text-center">
                  <Button variant="danger" onClick={() => DeleteRow(i)}>
                    เทียบแคลอรี่
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Container className="p-3 my-3 bg-ligh">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/main" element={<Index />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;