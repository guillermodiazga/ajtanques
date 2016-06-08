<?	
	Class Conexion{
		private  $servidor = "mysql.hostinger.co" ;
		private $usuario="u441994171_user";
		private $clave="ajtanques";
		private $db= "u441994171_ajdb";
		private $objConexion;
		
		public function open(){

			$this->objConexion = mysql_connect($this->servidor,$this->usuario, $this->clave);
			
			if(!$this->objConexion){
				echo "Fallo la Conexión a la Base de Datos";
			}
				
			mysql_select_db($this->db, $this->objConexion);
		}
			
		public function close($result){
			mysql_free_result($result);
			mysql_close();
		}

		
	
	}

?>