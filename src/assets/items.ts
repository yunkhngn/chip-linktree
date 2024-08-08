import website from '../assets/website.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.jpg'
import github from '../assets/github.png'
import facebook from '../assets/facebook.png'

import { ItemType } from '../ts';

const items: ItemType[] = [
{
    "title": "Facebook",
    "subtitle": "@yun.khngn | 3.9k followers 🔥",
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
    "title": "Website",
    "subtitle": "My personal website! Currently under construction 🚧",
    "image": website,
    "link": "https://yunkhngn.vercel.app/" //your personal website or portfolio  link
},
{
    "title": "LinkedIn",
    "subtitle": "Know more about my profession 👨‍💼",
    "image": linkedin,
    "link": "https://www.linkedin.com/in/yunkhngn/" // linkedin
},
]

export default items
