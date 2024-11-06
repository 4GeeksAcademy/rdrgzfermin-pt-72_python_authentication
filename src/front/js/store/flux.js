const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token : null
		},
		actions: {
			signIn : async (email,password) =>{
				try{
					let response = await fetch(process.env.BACKEND_URL)
					.then((res) => res.json())

				}
				
				catch(error){
					console.log(error)
				}
			},
			signUp : async (email,password) =>{
				try{
					let response = await fetch(process.env.BACKEND_URL)
					.then((response) => response.json())
					
				}
				
				catch(error){
					console.log(error)
				}
			},
			private : () =>{},
		}
	};
};

export default getState;
