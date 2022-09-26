import website from '../assets/website.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.jpg'
import github from '../assets/github.png'
import behance from '../assets/behance.png'
import facebook from '../assets/facebook.png'
import tngoc from '../assets/tngoc.png'
import portfolio from '../assets/portfolio.png'
import profiles from '../assets/profiles.png'

import { ItemType } from '../ts';

const items: ItemType[] = [
{
    "title": "Facebook",
    "subtitle": "@yun.khngn | 3.9k followers 🔥",
    "image": facebook,
    "link": "https://facebook.com/yun.khngn" // linkedin
},
{
    "title": "Instagram",
    "subtitle": "@yun.khngn_ |  Shots of my life 🙂",
    "image": instagram,
    "link": "https://instagram.com/yun.khngn_" //instagram profile link 
},
{
    "title": "GitHub",
    "subtitle": "@yunkhngn | 🏡 to all my open-source projects",
    "image": github,
    "link": "https://github.com/yunkhngn" //Github Profile link
},
{
    "title": "Website",
    "subtitle": "My personal website! Currently under construction 🚧",
    "image": website,
    "link": "https://www.khoanguyen.dev/" //your personal website or portfolio  link
},
{
    "title": "LinkedIn",
    "subtitle": "Know more about my profession 👨‍💼",
    "image": linkedin,
    "link": "https://www.linkedin.com/in/yunkhngn/" // linkedin
},
{
    "title": "Behance",
    "subtitle": "View my designs and contributions 🎨",
    "image": behance,
    "link": "https://www.behance.net/yunkhngn" // linkedin
},
{
    "title": "Thanh Ngoc",
    "subtitle": "Counter to Thanh Ngoc's birthday 🎂",
    "image": tngoc,
    "link": "https://thanhngoc.app" // linkedin
},
{
    "title": "Static Portfolio",
    "subtitle": "My old static portfolio project 📃",
    "image": portfolio,
    "link": "https://yunkhngn.github.io/portfolio/" // linkedin
},
{
    "title": "Profile Card",
    "subtitle": "Profile card cloned from Linktree ⌨️",
    "image": profiles,
    "link": "https://yunkhngn.github.io/profiles/" // linkedin
},
]

export default items
