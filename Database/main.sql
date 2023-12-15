show databases;

create database pharmacy;

use pharmacy;

show tables;

create table medicine(
    mid varchar(20),
    name varchar(200),
    qty int,
    price decimal(10,2),
    sid varchar(20),
    primary key(mid),
    foreign key(sid) references supplier(sid)

);

desc medicine;

select * from medicine;

insert into medicine values('M001', 'Amoxalin', 300, 15.00 ,'S001');

insert into medicine values('M002', 'Panadol', 200, 15.00 ,'S001');

insert into medicine values('M003', 'Amoxalin', 300, 15.00, 'S002');

insert into medicine values('M004', 'Amoxalin', 300, 15.00, 'S002');

insert into medicine values('M001', 'Amoxalin', 300, 15.00);



select * from medicine;

delete * from medicine where mid = 'M002';

create table supplier(
    sid varchar(20),
    name varchar(200),
    email varchar(100),
    address varchar(200),
    primary key(sid)
);

insert into supplier values('S001', 'HK Holding', 'helllo@hk.lk', 'kaluthara');
insert into supplier values('S002', 'FK Holding', 'hello@fk.lk', 'Panadura');

drop table medicine;