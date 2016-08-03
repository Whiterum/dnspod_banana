create table domain (
	id tinyint unsigned primary key auto_increment, 
	status char(11) default "enable", 
	ttl smallint default 600,
	remark char(11), 
	create_on datetime not null, 
	update_on datetime not null, 
	name char(20) not null, 
	grade_title char(11), 
	records tinyint
)engine=innodb default charset utf8;

create table record (
	id tinyint unsigned primary key auto_increment,
	dns tinyint unsigned not null,
	name char(5) not null,
	line char(5) default "默认",
	type char(5) not null,
	ttl smallint default 600,
	value char(11) not null,
	mx tinyint not null,
	enable char(2) not null,
	remark char(11),
	update_on datetime not null,
	foreign key(dns) references domain(id)
)engine=innodb default charset utf8;