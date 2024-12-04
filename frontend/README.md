# Project Name
An e-commerce platform dedicated to IPL cricket fans, offering a wide range of IPL-themed products. Whether you're looking for jerseys, merchandise, or memorabilia, this website provides a seamless shopping experience tailored for cricket enthusiasts.

## Installation

Instructions on setting up the project:
1. Clone the repository:
   
   git clone https://github.com/ramusiripalli/E_Commerce_IPL/

## Environment Variables

PORT=5000
MONGO_URI=mongodb+srv://ramusiripalli2425:kOASA0Y76ghoxGFP@cluster0.luxei.mongodb.net/ecommerce_ipl
UPSTASH_REDIS_URL=rediss://default:AWHcAAIjcDE2ZTRiOGU2MGI3Mzc0ZTU5YWRjOGMxZGYwMDdiMDhlYnAxMA@upward-marten-25052.upstash.io:6379
ACCESS_TOKEN_SECRET=access_token_secret
REFRESH_TOKEN_SECRET=refresh_token_secret
NODE_ENV=development
CLOUDINARY_CLOUD_NAME=dqir2p1sv
CLOUDINARY_API_KEY=418898577687524
CLOUDINARY_API_SECRET=s6ZUJQJEiFY3iL1Un-oq5rdYJLc

## Used REDIS,CLOUDINARY,MONGODB

## TEAM ASSIGNMENT CODE
const IPL_TEAMS = ['RCB', 'MI', 'CSK', 'KKR', 'DC', 'SRH', 'RR', 'PBKS', 'GT', 'LSG'];
const assignIPLTeam = () => IPL_TEAMS[Math.floor(Math.random() * IPL_TEAMS.length)];

