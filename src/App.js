import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {Home} from './components/Home';
import { Content } from './components/Content';
import { MapDemo } from './components/Mapdemo';
import { Uni } from './components/Uni';
import { UseStateDemo } from './components/UseStateDemo';
import { UseStateDemo2 } from './components/UseStateDemo2';
import { UseStateDemo3 } from './components/UseStateDemo3';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { NetflixHomes } from './components/Netflix/NetflixHomes';
import { NetflixMovies } from './components/Netflix/NetflixMovies';
import { NetflixDashboard } from './components/Netflix/NetflixDashboard';
import { Error404 } from './components/Netflix/Error404';
import { AboutNetflix } from './components/Netflix/AboutNetflix';
import { ContactNetflix } from './components/Netflix/ContactNetflix';
import { PlayMovies } from './components/Netflix/PlayMovies';
import { FormDemo1 } from './components/Forms/FormDemo1';
import { FormDemo2 } from './components/Forms/FormDemo2';
import { Mcq } from './components/Forms/Mcq';
import { FormDemo3 } from './components/Forms/FormDemo3';
import { FormDemo4 } from './components/Forms/FormDemo4';
import { FormDemo5 } from './components/Forms/FormDemo5';
import { InputDemo } from './components/Forms/InputDemo1';
import { Hello } from './components/Hello';
import { UseStateDemo4 } from './components/UseStateDemo4';
import { FormDemo6 } from './components/Forms/FormDemo6';
import { Parent } from './components/Parent';
import NotesApp from './components/Notesapp';
import { ApiDemo1 } from './components/API/ApiDemo1';
import { Omdb1 } from './components/API/Omdb1';
import { ApiDemo2 } from './components/API/ApiDemo2';
import { FormDemo7 } from './components/Forms/FormDemo7';
import { UseMemo } from './components/UseMemo';
import { Products } from './components/Context/Products';
import { ApiDemo3 } from './components/API/ApiDemo3';
import { Login } from './components/Forms/Login';
import { FormDemo8 } from './components/Forms/FormDemo8';
import { MovieDetails } from './components/API/MovieDetails';
import { EcomNavbar } from './components/Ecom-app/EcomNavBar';
import { EcomSignUp } from './components/Ecom-app/EcomSignUp';
import { EcomLogin } from './components/Ecom-app/EcomLogin';
import { EcomHome } from './components/Ecom-app/EcomHome';


function App() {

//   We return only one tag at a time
//   Every tag must have a closing tag
//   whatever we write on the return statement it will be displayed on the screen

var title = "React Js"
var city = "surat"
var address = {
  country:"India",
  state:"Gujarat"
}

   return (
    <div className="App">
      <EcomNavbar></EcomNavbar>
      <Routes>
        <Route path="/EcomSignUp" element={<EcomSignUp></EcomSignUp>}></Route>
        <Route path='/login' element={<EcomLogin></EcomLogin>}></Route>
        <Route path='/home' element={<EcomHome></EcomHome>}></Route>
        <Route path="/" element={<NetflixDashboard/>}></Route>
        <Route path="/dashboard" element = {<NetflixDashboard></NetflixDashboard>}></Route>
        <Route path = "/netflixhome" element={<NetflixHomes></NetflixHomes>}></Route>
        <Route path = "/netflixmovies" element={<NetflixMovies></NetflixMovies>}></Route>
        <Route path = "/*" element={<Error404></Error404>}></Route>
        <Route path = "/dashboard/aboutnetflix" element = {<AboutNetflix></AboutNetflix>}></Route>
        <Route path = "/dashboard/contactnetflix" element = {<ContactNetflix></ContactNetflix>}></Route>
        <Route path = "/netflixmovies/play/:id" element={<PlayMovies></PlayMovies>}></Route>
        <Route path = "/formdemo1" element={<FormDemo1></FormDemo1>}></Route>
        <Route path = "/formdemo2" element={<FormDemo2></FormDemo2>}></Route>
        <Route path = "/mcq" element={<Mcq></Mcq>}></Route>
        <Route path="/formdemo3" element={<FormDemo3></FormDemo3>}></Route>
        <Route path="/formdemo4" element={<FormDemo4></FormDemo4>}></Route>
        <Route path="/formdemo5" element={<FormDemo5></FormDemo5>}></Route>
        <Route path="/inputdemo1" element={<InputDemo></InputDemo>}></Route>
        <Route path="/hello" element={<Hello></Hello>}></Route>
        <Route path="/usestate" element={<UseStateDemo></UseStateDemo>}></Route>
        <Route path="/usestatedemo4" element={<UseStateDemo4></UseStateDemo4>}></Route>
        <Route path="/formdemo6" element={<FormDemo6></FormDemo6>}></Route>
        <Route path="/parentchildprops" element={<Parent></Parent>}></Route>
        <Route path="/nodes" element={<NotesApp></NotesApp>}></Route>
        <Route path="/apidemo1" element={<ApiDemo1></ApiDemo1>}></Route>
        <Route path="/formdemo8/search_query=/:movie" element={<Omdb1></Omdb1>}></Route>
        <Route path="/apidemo2" element={<ApiDemo2></ApiDemo2>}></Route>
        <Route path="/formdemo7" element={<FormDemo7></FormDemo7>}></Route>
        <Route path="/usestatedemo2" element={<UseStateDemo2></UseStateDemo2>}></Route>
        <Route path="/usememo" element={<UseMemo></UseMemo>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/apidemo3" element={<ApiDemo3></ApiDemo3>}></Route>
        <Route path="/loginpage" element={<Login></Login>}></Route>
        <Route path="/formdemo8" element={<FormDemo8></FormDemo8>}></Route>
        <Route path="/formdemo8/search_query=/:movie/imdbID/:id" element={<MovieDetails></MovieDetails>}></Route>

      </Routes>
     {/* <Header t = {title} c = {city}></Header>
    <UseStateDemo3></UseStateDemo3> */}
     {/* <UseStateDemo2></UseStateDemo2> */}
      {/* <UseStateDemo></UseStateDemo> */}
      {/* <Uni></Uni> */}
      {/* <MapDemo></MapDemo>  */}
      {/* <Home a = {address}></Home>
      <Content t = {title} c={city}> </Content> */}
      {/* <Footer t= {title}></Footer> */}
      
    </div>
  );
}

export default App;
