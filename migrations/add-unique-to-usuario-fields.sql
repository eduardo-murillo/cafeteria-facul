ALTER TABLE `db_coffeemountain`.`usuario` 
ADD UNIQUE INDEX `EmailUsuario_UNIQUE` (`EmailUsuario` ASC) VISIBLE,
ADD UNIQUE INDEX `CPF_UNIQUE` (`CPF` ASC) VISIBLE;
;
