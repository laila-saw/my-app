import React from 'react';
import { useState } from 'react'
import ReactDOM from 'react-dom';
import { Route, HashRouter as Router, Routes, Link } from 'react-router-dom';
import { ArrowDownward, ArrowUpward, Visibility, DeleteOutline, Edit, Publish } from "@material-ui/icons";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DataGrid } from '@mui/x-data-grid';

import './index.css';

const UserData = [
  {
    name: 'Jan',
    "Active User": 4
  },
  {
    name: 'Feb',
    "Active User": -3
  },
  {
    name: 'Mar',
    "Active User": 2
  },
  {
    name: 'Apr',
    "Active User": -1
  },
  {
    name: 'May',
    "Active User": 0
  },
  {
    name: 'Jun',
    "Active User": 1
  },
  {
    name: 'Jul',
    "Active User": 4,
  },
  {
    name: 'Agu',
    "Active User": 6,
  },
  {
    name: 'Sep',
    "Active User": -3,
  },
  {
    name: 'Oct',
    "Active User": 10,
  },
  {
    name: 'Nov',
    "Active User": 3,
  },
  {
    name: 'Dec',
    "Active User": 2,
  }
];
const ProductData = [
  {
    name: 'Jan',
    "Sales": 4
  },
  {
    name: 'Feb',
    "Sales": -3
  },
  {
    name: 'Mar',
    "Sales": 2
  }
];
// data table 


const userRrows = [
  {
    id: 1,
    username: 'Jon Snow',
    img: './img/persons/p3.png',
    email: 'jon@gmail.com',
    status: "active",
    transaction: "$120.00"
  },
  {
    id: 2,
    username: 'Jane Snow',
    img: './img/persons/p3.png',
    email: 'jon@gmail.com',
    status: "active",
    transaction: "$120.00"
  },
  {
    id: 3,
    username: 'Jon Snow',
    img: './img/persons/p3.png',
    email: 'jon@gmail.com',
    status: "active",
    transaction: "$120.00"
  },
  {
    id: 4,
    username: 'Jon Snow',
    img: './img/persons/p3.png',
    email: 'jon@gmail.com',
    status: "active",
    transaction: "$120.00"
  },
  {
    id: 5,
    username: 'Jon Snow',
    img: './img/persons/p3.png',
    email: 'jon@gmail.com',
    status: "active",
    transaction: "$120.00"
  },
  {
    id: 6,
    username: 'Jane Snow',
    img: './img/persons/p3.png',
    email: 'jon@gmail.com',
    status: "active",
    transaction: "$120.00"
  },
  {
    id: 7,
    username: 'Jon Snow',
    img: './img/persons/p3.png',
    email: 'jon@gmail.com',
    status: "active",
    transaction: "$120.00"
  },
  {
    id: 8,
    username: 'Jon Snow',
    img: './img/persons/p3.png',
    email: 'jon@gmail.com',
    status: "active",
    transaction: "$120.00"
  },
  {
    id: 9,
    username: 'Jon Snow',
    img: './img/persons/p3.png',
    email: 'jon@gmail.com',
    status: "active",
    transaction: "$120.00"
  },
  {
    id: 10,
    username: 'Jon Snow',
    img: './img/persons/p3.png',
    email: 'jon@gmail.com',
    status: "active",
    transaction: "$120.00"
  }
];
const productRows = [
  {
    id: 1,
    name: 'apple airpods',
    img: './img/persons/p3.png',
    stock: 123,
    status: "active",
    price: "$120.00"
  },
  {
    id: 2,
    name: 'apple airpods',
    img: './img/persons/p3.png',
    stock: 123,
    status: "active",
    price: "$120.00"
  },
  {
    id: 3,
    name: 'apple airpods',
    img: './img/persons/p3.png',
    stock: 123,
    status: "active",
    price: "$120.00"
  },
  {
    id: 4,
    name: 'apple airpods',
    img: './img/persons/p3.png',
    stock: 123,
    status: "active",
    price: "$120.00"
  },
  {
    id: 5,
    name: 'apple airpods',
    img: './img/persons/p3.png',
    stock: 123,
    status: "active",
    price: "$120.00"
  },
  {
    id: 6,
    name: 'apple airpods',
    img: './img/persons/p3.png',
    stock: 123,
    status: "active",
    price: "$120.00"
  },
  {
    id: 7,
    name: 'apple airpods',
    img: './img/persons/p3.png',
    stock: 123,
    status: "active",
    price: "$120.00"
  },
  {
    id: 8,
    name: 'apple airpods',
    img: './img/persons/p3.png',
    stock: 123,
    status: "active",
    price: "$120.00"
  },
  {
    id: 9,
    name: 'apple airpods',
    img: './img/persons/p3.png',
    stock: 123,
    status: "active",
    price: "$120.00"
  },
  {
    id: 10,
    name: 'apple airpods',
    img: './img/persons/p3.png',
    stock: 123,
    status: "active",
    price: "$120.00"
  }
];
// !data table 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
function App() {

  return (
    <Router><Admin /></Router>

  )
}
function Admin() {
  const [sidebarOpened, setSidebarOpened] = useState(false)
  return (
    <>
      <Topbar />
      <div className={sidebarOpened ? "cap container sticky" : "cap container"}>
        <Sidebar sidebarOpened={sidebarOpened} setSidebarOpened={setSidebarOpened} />

        <Routes>
          <Route exact path="" element={<Home />} />
          <Route path='/userList' element={<UserList />} />
          <Route path='/user/:userId' element={<User />} />
          <Route path='/newuser' element={<NewUser />} />
          <Route path='/productList' element={<ProductList />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/newproduct' element={<NewProduct />} />
        </Routes>

      </div>
    </>
  )
}
// ************* pages *****************
// home 1
function Home() {
  return (
    <div className="page">
      <FeaturedInfo />
      <Chart data={UserData} title="User Analytics" grid dataKey={"Active User"} />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
// !home 
// userList 2
// 1:38 

function UserList() {
  const [data, setData] = useState(userRrows);
  function handleDelete(id) {
    setData(data.filter((item) => item.id !== id))
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'user', headerName: 'Username', width: 200, renderCell: (params) => {
        return (
          <div className="userCell">
            <img src={params.row.img} alt="" />
            {params.row.username}
          </div>
        )
      }
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 130,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <div className="actionOptions">
            <Link to={"/user/" + params.row.id}>
              <button className="actionOption edit"><Edit title="Edit" /> </button>
            </Link>
            <button className="actionOption delete" onClick={() => handleDelete(params.row.id)}><DeleteOutline title="Delete" /></button>
          </div>
        )
      }
    }
  ];
  return (
    <div className="page" style={{ height: "calc(100% - 50px)" }}>

      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>

  )
}
// !userList 

// single user 3
function User() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="user page">
      <div className="userTitileContainer">
        <h1 className='title-page'>edit user</h1>
        <Link to="/newUser">
          <button className="userAddBtn ">create</button>
        </Link>

      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <div className="imgContainer"><img src={PF + "persons/p10.png"} alt="" /></div>
            <div className="userInfoContainer">
              <div className="username "><strong>laila ouhamou</strong></div>
              <div className="userjob ">software engineer</div>
            </div>
          </div>
          <div className="userShowBottom">
            <div className="title ">account details</div>
            <div className="info-details">
              <div className="infoItem">
                <div className="icon"><i className="fa fa-user"></i></div>
                <div className="text ">Laila99</div>
              </div>
              <div className="infoItem">
                <div className="icon"><i className="far fa-calendar"></i></div>
                <div className="text ">15/07/1999</div>
              </div>
            </div>
            <div className="title ">contact details</div>
            <div className="info-details">
              <div className="infoItem">
                <div className="icon"><i className="fa fa-phone"></i></div>
                <div className="text ">07 67 77 36 20</div>
              </div>
              <div className="infoItem">
                <div className="icon"><i className="fa fa-envelope"></i></div>
                <div className="text email">laila.ouhamou99@gmail.com</div>
              </div>
              <div className="infoItem">
                <div className="icon"><i className="fa fa-map-marker-alt"></i></div>
                <div className="text ">agadir, morocco.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <div className="title ">edit : </div>
          <form action="" className="editForm">
            <div className="editInfoText">
              <div className="fieldCouple">
                <div className="field">
                  <label className="">Usrename</label>
                  <input type="text" value="Laila99" />
                </div>
                <div className="field">
                  <label className="">full name</label>
                  <input type="text" value="laila ouhamou" />
                </div>
              </div>
              <div className="fieldCouple">
                <div className="field">
                  <label className="">title</label>
                  <input type="text" value="software engineer" />
                </div>
                <div className="field">
                  <label className="">birthday</label>
                  <input type="date" value="15/07/1999" />
                </div>
              </div>
              <div className="fieldCouple">
                <div className="field">
                  <label className="">phone number</label>
                  <input type="text" value="07 67 77 36 20" />
                </div>
                <div className="field">
                  <label className="">email</label>
                  <input type="email" value="laila.ouhamou99@gmail.com" />
                </div>
              </div>

              <div className="field">
                <label className="">adress</label>
                <input type="text" value="agadir, morocco" />
              </div>
            </div>
            <div className="editInfoImg">
              <div className="userUpdateUpload">
                <input type="file" name="" id="uploadImg" hidden />
                <div className="imgContainer"><img src={PF + "persons/p2.png"} alt="" /></div>
                <label htmlFor="uploadImg" className="icon"><Publish /> </label>
              </div>
              <button className="updateBtn ">update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
// !single user
// new user 4
function NewUser() {
  return (
    <div className="page newUser">
      <h1 className="title-page">New User</h1>
      <form className="addUserForm">
        <div className="newusergroup">
          <div className="newUserItem">
            <label className=''>username</label>
            <input type="text" placeholder='username' />
          </div>
          <div className="newUserItem">
            <label className=''>full name</label>
            <input type="text" placeholder='full name' />
          </div>
          <div className="newUserItem">
            <label className=''>email</label>
            <input type="email" placeholder='email' />
          </div>
          <div className="newUserItem">
            <label className=''>password</label>
            <input type="password" />
          </div>
          <div className="newUserItem">
            <label className=''>phone</label>
            <input type="text" placeholder='phone' />
          </div>
          <div className="newUserItem">
            <label className=''>address</label>
            <input type="text" placeholder='address' />
          </div>
          <div className="newUserItem">
            <label className=''>title</label>
            <input type="text" placeholder='title' />
          </div>

          <div className="newUserItem">
            <label className=''>gender</label>
            <div className="genderWrapper">
              <input type="radio" name="gender" id="male" value="male" />

              <label htmlFor="male">male</label>
              <input type="radio" name="gender" id="female" />
              <label htmlFor="female">female</label>
            </div>
          </div>
        </div>
        <button >create</button>
      </form>
    </div>
  )
}
// !new user
// products list  5
function ProductList() {
  const [data,setData]=useState(productRows)
  function handleDelete(id){
    setData(data.filter((item)=>item.id!==id))
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'product', headerName: 'name', width: 200, renderCell: (params) => {
        return (
          <div className="userCell">
            <img src={params.row.img} alt="" />
            {params.row.name}
          </div>
        )
      }
    },
    { field: 'stock', headerName: 'stock', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 130,
    },
    {
      field: 'price',
      headerName: 'price Volume',
      width: 160,
    }
    ,
    {
      field: 'action',
      headerName: 'action',
      width: 150,
      renderCell: (params) => {
        return (
          <div className="actionOptions">
            <Link to={"/product/" + params.row.id}>
              <button className="actionOption edit"><Edit title="Edit" /> </button>
            </Link>
            <button className="actionOption delete" onClick={() => handleDelete(params.row.id)}><DeleteOutline title="Delete" /></button>
          </div>
        )
      }
    }
  ];
  return (
    <div className="page productList" style={{ height: "calc(100% - 50px)" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}
// !products list
// product
function Product() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="product page">
      <div className="productTitleContainer">
      <h1 className="productTitle">product</h1>
      <Link to='/newproduct'>
        <button className="productAddBtn">create</button>
      </Link>
      </div>
      <div className="productTop">
        <div className="productLeft">
          <Chart data={ProductData} dataKey={"Sales"} title="sales performance"  />
        </div>
        <div className="productRight">
          <div className="productInfoTop">
            <img src={PF+"watcheW2.png"} alt="" className="productImg" />
            <span className="productName">watch</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id : </span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales : </span>
              <span className="productInfoValue">5123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active : </span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock : </span>
              <span className="productInfoValue">No</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" value="watch" />
            <label > in stock</label>
            <select name="inSock" id="idStock">
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
            <label >active</label>
            <select name="active" id="active">
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={PF + "watcheW2.png"} alt="" className="productUploadImg" />
              <input type="file" name="" id="file" hidden/>
              <label htmlFor="file">
                <Publish className='publishIcon'/>
              </label>
            </div>
            <button className="productBtn">update</button>
          </div>
        </form>
      </div>
    </div>
  )
}
// !product
// new product 
function NewProduct(){
  return(
    <div className="page newProduct">
      <h1 className="title-page">New Product</h1>
      <form className="addProductrForm">
        <div className="newProductgroup">
        <div className="newProductItem">
            <label className=''>image</label>
            <input type="file" />
          </div>
          <div className="newProductItem">
            <label className=''>name</label>
            <input type="text" placeholder='name' />
          </div>
          <div className="newProductItem">
            <label className=''>stock</label>
            <input type="text" placeholder='stock' />
          </div>
          <div className="newProductItem">
            <label className=''>Active</label>
            <select name="" id="">
              <option value="yes">yes</option>
              <option value="yes">no</option>
            </select>
          </div>
         
        </div>
        <button >create</button>
      </form>
    </div>
  )
}
// !new product 
// ************* !pages *****************
// ************* compenent *****************
function Topbar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to='/'>
            <h1 className="logo ">Saw<span>Admin.</span></h1>
          </Link>

        </div>
        <div className="topRight">
          <div className="topbarIcons">
            <div className="icon">
              <i className="fa fa-bell"></i>
              <div className="iconBage">2</div>
            </div>
            <div className="icon"><i className="fa fa-envelope"></i></div>
            <div className="icon"><i className="fa fa-user"></i></div>
          </div>
          <div className="topProfileImg">
            <img src={PF + "watcheW2.png"} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

function Sidebar({ setSidebarOpened, sidebarOpened }) {
  const sidebarMenu = [
    {
      id: 1,
      list: [
        {
          id: 11,
          icon: "fa fa-home",
          item: "home",
          link: "/"
        },
        {
          id: 21,
          icon: "fa fa-chart-line",
          item: "Analytics",
          link: "/"
        },
        {
          id: 31,
          icon: "fab fa-salesforce",
          item: "Sales",
          link: "/"
        },
      ]
    },
    {
      id: 2,
      list: [
        {
          id: 21,
          icon: "fa fa-user",
          item: "users",
          link: "/userList"
        },
        {
          id: 22,
          icon: "fa fa-chart-line",
          item: "products",
          link: "/productList"
        },
        {
          id: 23,
          icon: "fa fa-dollar-sign",
          item: "transaction",
          link: "/"
        },
      ]
    },
    {
      id: 3,
      list: [
        {
          id: 31,
          icon: "fa fa-envelope",
          item: "mail",
          link: "/"
        },
        {
          id: 32,
          icon: "fa fa-chart-line",
          item: "feedback",
          link: "/"
        },
        {
          id: 33,
          icon: "fa fa-comment",
          item: "messages",
          link: "/"
        },
      ]
    },
    {
      id: 4,
      list: [
        {
          id: 41,
          icon: "fas fa-sign-out-alt",
          item: "Log Out",
          link: "/"
        }
      ]
    }
  ]
  return (
    <div className="sidebar">
      <div className="controlIcon" onClick={() => setSidebarOpened(!sidebarOpened)}>

        <i className="fa fa-angle-left"></i>
      </div>
      <div className="sidebarWrapper">
        <div className="searchBar">
          <div className="icon"><i className="fa fa-search"></i></div>
          <input type="text" placeholder='Search' />
          <span className="tooltip ">search</span>
        </div>
        {
          sidebarMenu.map((menu) => (
            <div className="sidebarMenu" key={menu.id}>
              <ul className="sidebarList" onClick={() => setSidebarOpened(false)}>
                {menu.list.map((li) => (
                  <li key={li.id} className="sidebarListItem">
                    <Link to={li.link} >
                      <div className="icon"><i className={li.icon}></i></div>
                      <span className="text ">{li.item}</span>
                    </Link>
                    <span className="tooltip ">{li.item}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))
        }
      </div>
    </div>
  )
}
function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="title ">Total Order</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">43</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowUpward className="featuredIcon negatif"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="title ">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$ 2.415</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="title ">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$ 4.415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negatif" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="title ">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$ 2.22</span>
          <span className="featuredMoneyRate">
            +1.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  )
}

function Chart({ title, data, dataKey, grid }) {
  console.log(document.querySelector(".ResponsiveContainer"));
  return (
    <div className="chart">
      <h3 className="chartTitle ">{title}</h3>
      <ResponsiveContainer className="ResponsiveContainer" width="100%" aspect={4 / 2}>
        {/* aspect if the width is 4 unit the height will be 1 unit*/}
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {grid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey="name" />
          <Tooltip />

          <Line type="monotone" dataKey={dataKey} stroke="var(--darkMainColor)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
function WidgetSm() {
  return (
    <div className="widgetSm">
      <h3 className="title ">new join members</h3>
      <ul className=" widgetSmList">
        <li className="widgetSmListItem">
          <img src="./img/persons/p1.png" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername ">laila ouhamou</span>
            <span className="widgetSmUserTitle ">software engineer</span>
          </div>
          <button className="widgetSmBtn">
            <Visibility className="icon" />
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="./img/persons/p1.png" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername ">laila ouhamou</span>
            <span className="widgetSmUserTitle ">software engineer</span>
          </div>
          <button className="widgetSmBtn">
            <Visibility className="icon" />
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="./img/persons/p1.png" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername ">laila ouhamou</span>
            <span className="widgetSmUserTitle ">software engineer</span>
          </div>
          <button className="widgetSmBtn">
            <Visibility className="icon" />
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="./img/persons/p1.png" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername ">laila ouhamou</span>
            <span className="widgetSmUserTitle ">software engineer</span>
          </div>
          <button className="widgetSmBtn">
            <Visibility className="icon" />
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="./img/persons/p1.png" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername ">laila ouhamou</span>
            <span className="widgetSmUserTitle ">software engineer</span>
          </div>
          <button className="widgetSmBtn">
            <Visibility className="icon" />
          </button>
        </li>
      </ul>
    </div>
  )
}
function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={' widgetLgBtn ' + type}>{type}</button>
  }
  return (
    <div className="widgetLg">
      <h3 className="title ">latest transactions</h3>
      <table className="widgetLgTable">
        <thead>
        <tr className="widgetLgTr">
          <th className="widgetLgTh ">customer</th>
          <th className="widgetLgTh ">date</th>
          <th className="widgetLgTh ">amount</th>
          <th className="widgetLgTh ">status</th>
        </tr>
        </thead>
        <tbody>
        <tr className="widgetLgTr">
          <td className="widgetLgUser ">
            <img src="./img/persons/p2.png" alt="" className="widgetLgImg" />
            <span className="widgetLgName  ">saw saw</span>
          </td>
          <td className="widgetLgDate ">2 Jun 2021</td>
          <td className="widgetLgAmount ">$ 122.00</td>
          <td className="widgetLgstatus ">
            <Button type='approved' />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser ">
            <img src="./img/persons/p2.png" alt="" className="widgetLgImg" />
            <span className="widgetLgName  ">saw saw</span>
          </td>
          <td className="widgetLgDate ">2 Jun 2021</td>
          <td className="widgetLgAmount ">$ 122.00</td>
          <td className="widgetLgstatus ">
            <Button type='declined' />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser ">
            <img src="./img/persons/p2.png" alt="" className="widgetLgImg" />
            <span className="widgetLgName  ">saw saw</span>
          </td>
          <td className="widgetLgDate ">2 Jun 2021</td>
          <td className="widgetLgAmount ">$ 122.00</td>
          <td className="widgetLgstatus ">
            <Button type='pending' />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser ">
            <img src="./img/persons/p2.png" alt="" className="widgetLgImg" />
            <span className="widgetLgName  ">saw saw</span>
          </td>
          <td className="widgetLgDate ">2 Jun 2021</td>
          <td className="widgetLgAmount ">$ 122.00</td>
          <td className="widgetLgstatus ">
            <Button type='approved' />
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

// ************* !compenent *****************