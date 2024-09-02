import website from '../assets/website.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.jpg'
import github from '../assets/github.png'
import facebook from '../assets/facebook.png'
import behance from '../assets/behance.png'

import { ItemType } from '../ts';

const items: ItemType[] = [
{
    "title": "Facebook",
    "subtitle": "@yun.khngn | 2.3k followers 🔥",
    "image": facebook,
    "link": "https://www.facebook.com/yunkhngn" // fb
},
{
    "title": "Instagram",
    "subtitle": "@yun.khngn |  Shots of my life 🙂",
    "image": instagram,
    "link": "https://instagram.com/yun.khngn" //instagram profile link 
},
{
    "title": "GitHub",
    "subtitle": "@yunkhngn | 🏡 to all my open-source projects",
    "image": github,
    "link": "https://github.com/yunkhngn" //Github Profile link
},
{
    "title": "Khoa Nguyen",
    "subtitle": "My personal website/portfolio created with Nextjs 🚀",
    "image": website,
    "link": "https://khoanguyen.codes/" //your personal website or portfolio  link
},
{
    "title": "Behance",
    "subtitle": "My design projects and works 🎨",
    "image": behance,
    "link": "https://www.linkedin.com/in/yunkhngn/" // linkedin
},
{
    "title": "LinkedIn",
    "subtitle": "Know more about my profession 👨‍💼",
    "image": linkedin,
    "link": "https://www.linkedin.com/in/yunkhngn/" // linkedin
},
]

export default items
