-- user principal bd -> admin
-- senha user admin -> root@1234
-- user conexao -> root
-- senha da conexao localhost -> root@123

create database db_CoffeeMountain;
use db_CoffeeMountain;

-- Criando Tabela Usuario
create table Usuario (
	IdUsuario		integer 				primary key auto_increment,
	NomeUsuario		varchar(50)				not null,
	EmailUsuario    varchar(150) 			not null,
    SenhaUsuario	text					not null, 
    CPF				varchar(11)				not null    
);

-- Criando Tabela Produto
create table Produto (
	IdProduto		integer 				primary key auto_increment,
	NomeProduto		varchar(100) 			not null,
    PrecoProduto	decimal(5,2)		 	not null,
	QtdeProduto		integer					not null
);

-- Criando tabela TaxaEntrega
create table TaxaEntrega (
	IdTaxaEntrega				integer 				primary key auto_increment,
	Cidade						varchar(100) 			not null,
	CodIBGE						varchar(20) 				not null,
    ValorTaxa					decimal(5,2) 				not null
);

-- insert para teste das tabelas
insert into Usuario (IdUsuario, NomeUsuario, EmailUsuario, SenhaUsuario, CPF) values (null, 'Eduardo Murillo', 'eduardomurillo@outlook.com.br', 'edu@teste123', '44836294843');
insert into Usuario (IdUsuario, NomeUsuario, EmailUsuario, SenhaUsuario, CPF) values (null, 'Matheus Thommesani', 'matheusth@outlook.com.br', 'matheus@teste123', '79046154017');
insert into Usuario (IdUsuario, NomeUsuario, EmailUsuario, SenhaUsuario, CPF) values (null, 'Romulo Augusto', 'romuloaugusto@outlook.com.br', 'romulo@teste123', '68175407042');
insert into Usuario (IdUsuario, NomeUsuario, EmailUsuario, SenhaUsuario, CPF) values (null, 'Carlos Eduardo', 'carloseduardo@outlook.com.br', 'carlos@teste123', '02100732099');

insert into Produto (IdProduto, NomeProduto, PrecoProduto, QtdeProduto) values (null, 'Café Expresso', 4.60, 20);
insert into Produto (IdProduto, NomeProduto, PrecoProduto, QtdeProduto) values (null, 'Pão de Queijo', 3, 10);
insert into Produto (IdProduto, NomeProduto, PrecoProduto, QtdeProduto) values (null, 'Coxinha', 5.50, 15);
insert into Produto (IdProduto, NomeProduto, PrecoProduto, QtdeProduto) values (null, 'Pão na chapa', 2.49, 50);

insert into TaxaEntrega (IdTaxaEntrega, Cidade, CodIBGE, ValorTaxa) values (null, 'Sorocaba', '3552205', 10);
insert into TaxaEntrega (IdTaxaEntrega, Cidade, CodIBGE, ValorTaxa) values (null, 'Votorantim', '3557006', 15);
insert into TaxaEntrega (IdTaxaEntrega, Cidade, CodIBGE, ValorTaxa) values (null, 'Porto Feliz', '3540606', 20);
insert into TaxaEntrega (IdTaxaEntrega, Cidade, CodIBGE, ValorTaxa) values (null, 'Araçoiaba da Serra', '3502903', 25);

-- select's para teste das tabelas
select * from usuario;
select * from produto;
select * from taxaentrega;