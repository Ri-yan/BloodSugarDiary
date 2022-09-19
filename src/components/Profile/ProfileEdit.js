import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import { cover1,profile } from '../../assets';
import Todo from '../../todo'
const ProfileEdit = () => {
  return (
    <ProEdit>
   
   <div class="container-xl px-4 mt-4">
    <nav class="nav nav-borders">
        <a class="nav-link active ms-0" href="#" target="__blank">Profile</a>
        <a class="nav-link" href="#" target="__blank">Medecine</a>
        <a class="nav-link" href="#" target="__blank">Care Points</a>
        <a class="nav-link" href="#"  target="__blank">Scheduleings</a>
    </nav>
    <hr class="mt-0 mb-4"/>
    <div class="row">
        <div class="col-xl-4">
            <div class="card mb-4 mb-xl-0">
                <div class="card-header">Profile Picture</div>
                <div class="card-body text-center">
                    <img class="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                    <div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                    <button class="btn btn-primary" type="button">Upload new image</button>
                </div>
            </div>
        </div>
        <div class="col-xl-8">
            <div class="card mb-4">
                <div class="card-header">User Details</div>
                <div class="card-body">
                    <form>
                        <div class="row gx-3 mb-3">
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputFirstName">First name</label>
                                <input class="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" value="Valerie"/>
                            </div>
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLastName">Last name</label>
                                <input class="form-control" id="inputLastName" type="text" placeholder="Enter your last name" value="Luna"/>
                            </div>
                        </div>
                        <div class="row gx-3 mb-3">
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputOrgName">Date of Birth</label>
                                <input class="form-control" id="dob"  type='date' value='2022-01-01'/>
                            </div>
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLocation">Gender</label>
                                <input class="form-control" id="inputLocation" type="text" placeholder="Enter your location" value="Male"/>
                            </div>
                        </div>
                        <div class="row gx-3 mb-3">
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputOrgName">Blood Group</label>
                                <input class="form-control" id="dob"  type='Text' value='O'/>
                            </div>
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLocation">Consulting Doctor</label>
                                <input class="form-control" id="inputLocation" type="text" placeholder="Consulting Doctor" value="Dr. ABC XZ"/>
                            </div>
                        </div>
                        <div class="row gx-3 mb-3">
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputPhone">Phone number</label>
                                <input class="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value="555-123-4567"/>
                            </div>
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputBirthday">Location</label>
                                <input class="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your birthday" value="India"/>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="small mb-1" for="inputEmailAddress">Address</label>
                            <input class="form-control" id="inputEmailAddress" type="text" placeholder="address" value="B45 lucknow"/>
                        </div>
                        <button class="btn btn-primary" type="button">Save changes</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>



{/* <div class="col-xl-8">
            <div class="card mb-4 mb-xl-0">
                <div class="row gx-3 mb-3">
                            <div class="col-md-5">
                                <label class="small mb-1" for="inputFirstName">Medicine name</label>
                                <textarea class="form-control" id="inputFirstName"  placeholder="Enter your first name" value="Valerie" cols="30" rows="1"></textarea>
                            </div>
                            <div class="col-md-2">
                                <label class="small mb-1" for="inputLastName">Dosage</label>
                                <input class="form-control" id="inputLastName" type="text" placeholder="Enter your last name" value="Luna"/>
                            </div>
                            <div class="col-md-2">
                                <label class="small mb-1" for="inputLastName">Frequency</label>
                                <input class="form-control" id="inputLastName" type="text" placeholder="Enter your last name" value="Luna"/>
                            </div>
                            <div class="col-md-2">
                                <label class="small mb-1" for="inputLastName">Add</label>
                                <input class="form-control" id="inputLastName" type="submit" placeholder="Add" value="Add"/>
                            </div>
                </div>
            </div>
        </div> */}

{/* <div class="col-xl-8">
            <div class="card mb-4 mb-xl-0">
                <div class="row gx-3 mb-3">
                            <div class="col-md-5">
                                <textarea class="form-control" id="inputFirstName"  placeholder="Enter your first name" value="Valerie" cols="30" rows="1"></textarea>
                            </div>
                            <div class="col-md-2">
                                <input class="form-control" id="inputLastName" type="text" placeholder="Enter your last name" value="Luna"/>
                            </div>
                            <div class="col-md-2">
                                <input class="form-control" id="inputLastName" type="text" placeholder="Enter your last name" value="Luna"/>
                            </div>
                            <div class="col-md-2">
                                <input class="form-control" id="inputLastName" type="submit" placeholder="Add" value="Add"/>
                            </div>
                </div>
            </div>
            
        </div>  */}
{/* <Todo/> */}
</ProEdit>
  )
}

export default ProfileEdit

const ProEdit = styled.div`
background: url(${cover1});
    background-size: auto;
    background-repeat: no-repeat;
height: -webkit-fill-available;
    width: -webkit-fill-available;
    @media (max-width: 940px) {
        padding:  0px;
    }
    .img-account-profile{
        width: -webkit-fill-available;
        width: 10em;

        height: 10em;
    }
    
`