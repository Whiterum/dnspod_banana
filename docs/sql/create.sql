create table domain (
	do_id tinyint unsigned primary key auto_increment, 
	do_status char(11) default "enable", 
	ttl smallint default 600,
	remark char(11), 
	create_on datetime not null, 
	update_on datetime not null, 
	name char(20) unique not null,
	grade_title char(11),
	records tinyint
)engine=innodb default charset utf8;

create table record (
	re_id tinyint unsigned primary key auto_increment,
	do_id tinyint unsigned not null,
	name char(5) not null,
	re_line char(5) default "默认",
	type char(5) not null,
	ttl smallint default 600,
	value char(20) not null,
	mx char(2) not null,
	enable char(2) not null,
	remark char(11),
	update_on datetime not null,
	foreign key(do_id) references domain(do_id)
)engine=innodb default charset utf8;