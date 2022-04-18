/*use master;
CREATE DATABASE FREELANCO_1;
GO

use FREELANCO_1;
GO
CREATE SCHEMA FREELANCO_Schema_1;
*/

---------------------------------------------------------------------------------
-----------------------here is the structure for the table-----------------------
---------------------------------------------------------------------------------

CREATE TABLE ACCOUNTS (
	FName varchar(15),
	LName varchar(15),
	ID int,
	Email varchar(50),
	Username varchar(50),
	user_password varchar(32),
	UUID int,
	Picture varchar(250), -------put varchar to put a link here for the picture
	Acc_type char(1),
	Balance float,
	connects int,
	user_role char,
	phone varchar(12), ----------- '201xxxxxxxxx'
	user_address varchar(100),
	Country char(2), -----------code for country ex. US, EG,...
);


CREATE TABLE ADMINS(
	ID int,
	Email varchar(50),
	user_password varchar(32),
);

CREATE TABLE FREELANCE_PROFILE(
	Profile_ID int,
	Title varchar(50),
	Skills varchar(250), ---------proposed it as a paragraph for now --- can be an entity in future
	Payrate float,
	profile_Description varchar(1000), 
);


CREATE TABLE CLIENT_PROFILE(
	Profile_ID int,
	Total_spent float,
);


CREATE TABLE JOBS(
	Job_ID int,
	title varchar(50),
	job_status char(1), ---------make a relation with JOB_STATUS table
	category varchar(50), ---------make a relation with JOB_CATEGORIES table
	Skills varchar(250), ---------proposed it as a paragraph for now --- can be an entity in future
	attachments varchar(250), ---------link for an attachment
);


CREATE TABLE SERVICES_(
service_ID int,
title varchar(50),
experience_level char(1),
price float,
thumbnails varchar(250), ---------link for a picture
skills varchar(50),
category varchar(50) 
services_status
description
);



---------------------------------------------------------------------------------
------------------------------ Global tables for all ----------------------------
---------------------------------------------------------------------------------

CREATE TABLE THE_STATUS(
status_char char(1) NOT NULL primary key,
Status_name varchar(15) NOT NULL,
);


CREATE TABLE THE_CATEGORIES(
category_name varchar(50) NOT NULL primary key,
Description varchar(250)
);



---------------------------------------------------------------------------------
---------------------- here is the relations between tables ---------------------
---------------------------------------------------------------------------------



---------------------------------------------------------------------------------
--------------------- here enter the data into the database ---------------------
---------------------------------------------------------------------------------


