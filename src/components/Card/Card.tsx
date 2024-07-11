"use client";
import React, { useState } from "react";
import style from "./Card.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(style);

export default function Card() {
  // Khi sử dụng hook bên component thì phải dùng use client
  const [state, setState] = useState(true);
  return <div className={cx("card")}>Card</div>;
}
