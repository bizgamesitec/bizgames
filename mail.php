<?php

	date_default_timezone_set('America/Sao_Paulo');
	// echo '<pre>';
	// var_dump($_POST);
	// echo '</pre>';
	// die();
	if(($_POST['telefone'] == "") || ($_POST['nome'] == "") || ($_POST['email'] == "")) {
		die();
	}

	$comprar = new PDO("mysql:host=mysql.jnmoura.com.br;dbname=jnmoura10", "jnmoura10", "jnmA6uq");

	if(!$comprar){
  	die('Erro ao criar a conexão');
 	}

	$sql = "INSERT INTO provadorvirtual(
							nome,
							telefone,
							email,
							cidade,
							observacao,
							data)
							VALUES (
								:nome,
								:telefone,
								:email,
								:cidade,
								:observacao,
								:data)";

	$p_sql = $comprar->prepare($sql);

	$p_sql->bindValue(":nome", $_POST['nome'] );
	$p_sql->bindValue(":telefone", preg_replace('/[^[:alnum:]_]/', '',$_POST['telefone']) );
	$p_sql->bindValue(":email", $_POST['email'] );
	$p_sql->bindValue(":cidade", $_POST['cidade'] );
	$p_sql->bindValue(":observacao", $_POST['observacoes'] );
	$p_sql->bindValue(":data", date('c') );

 	if($p_sql->execute()) {
  	$bd = "Dados inseridos com sucesso!";
		$mensagem  = '<html><body>';
		$mensagem .= '<b>Nome:</b> ' . $_POST['nome'] . ' <br />';
		$mensagem .= '<b>Telefone:</b> ' . $_POST['telefone'] . ' <br />';
		$mensagem .= '<b>E-mail:</b> ' . $_POST['email'] . ' <br />';
		$mensagem .= '<b>Cidade:</b> ' . $_POST['cidade'] . ' <br />';
		$mensagem .= '<br /><b>BANCO DE DADOS:</b> ' . $bd . ' <br /><br />';
		$mensagem .= '<b>Observações:</b> '. nl2br($_POST['observacoes']);
		$mensagem .= '</body></html>';

		$headers  = "From: PROVADOR VIRTUAL <site@provadorvirtualmoura.com.br>\r\n";
		$headers .= "Content-type: text/html; charset=utf-8\r\n";

		$envio = mail("site@provadorvirtualmoura.com.br", "Cliente interessado no Provador Virtual (Formulário www.provadorvirtualmoura.com.br)", $mensagem, $headers);

		if($envio)
			echo json_encode(array('title' => 'Contato enviado com sucesso, aguarde nosso representante entrar em contato.', 'class' => 'green'));
		else
			echo json_encode(array('title' => 'Erro ao enviar e-mail. Por favor, ligue grátis para 0800 777 1990', 'class' => 'red'));
 	}
 	else {
  	echo json_encode(array('title' => 'Erro ao cadastrar. Por favor, ligue grátis para 0800 777 1990', 'class' => 'red'));
 	}

?>
