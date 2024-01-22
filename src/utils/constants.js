import React from "react";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import {
  MdLocalFireDepartment,
  MdLiveTv,
  MdOutlineSubscriptions,
  MdOutlineWatchLater,
} from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine, RiThumbUpLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { SiYoutubeshorts } from "react-icons/si";
import { TbUserSquare } from "react-icons/tb";
import { FaHistory } from "react-icons/fa";
import { GoVideo } from "react-icons/go";
import { FaAngleRight } from "react-icons/fa6";

export const categories = [
  { name: "New", icon: <AiFillHome />, type: "home" },
  { name: "Shorts", icon: <SiYoutubeshorts />, type: "shorts" },
  {
    name: "Subscriptions",
    icon: <MdOutlineSubscriptions />,
    type: "na",
    divider: true,
  },
  { title: "You" },
  { name: "Your channel", icon: <TbUserSquare />, type: "na" },
  { name: "History", icon: <FaHistory />, type: "na" },
  { name: "Your videos", icon: <GoVideo />, type: "na" },
  { name: "Watch later", icon: <MdOutlineWatchLater />, type: "na" },
  {
    name: "Liked videos",
    icon: <RiThumbUpLine />,
    type: "na",
    divider: true,
  },
  { title: "Explore" },
  { name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
  { name: "Music", icon: <CgMusicNote />, type: "category" },
  { name: "Films", icon: <FiFilm />, type: "category" },
  { name: "Live", icon: <MdLiveTv />, type: "category" },
  { name: "Gaming", icon: <IoGameControllerSharp />, type: "category" },
  { name: "News", icon: <ImNewspaper />, type: "category" },
  { name: "Sports", icon: <GiDiamondTrophy />, type: "category" },
  { name: "Learning", icon: <RiLightbulbLine />, type: "category" },
  {
    name: "Fashion & beauty",
    icon: <GiEclipse />,
    type: "category",
    divider: true,
  },
  { name: "Settings", icon: <FiSettings />, type: "menu" },
  { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
  { name: "Help", icon: <FiHelpCircle />, type: "menu" },
  { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
];
