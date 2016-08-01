create table domain (
	id tinyint unsigned primary key auto_increment, 
	status char(11) default "enable", 
	is_mark char(5) default "no", 
	ttl smallint not null, 
	remark char(11), 
	create_on datetime not null, 
	update_on datetime not null, 
	punycode char(11) not null, 
	ext_status char(11), 
	name char(11) not null, 
	grade_title char(11), 
	records tinyint
)engine=innodb default charset utf8;

create table record (
	id tinyint unsigned primary key auto_increment,
	name char(5) not null,
	line char(5) default "默认",
	type char(5) not null,
	ttl smallint not null,
	value char(11) not null,
	mx tinyint not null,
	enable char(2) not null,
	remark char(11),
	update_on datetime not null
)engine=innodb default charset utf8;