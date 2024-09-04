const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			peopleStarWars: [],
			planetsStarWars: [],
			vehiclesStarWars: [],
			favoritesStarWars: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			// Fetching SW characters

			fetchPeopleStarWars: () =>{
				fetch('https://swapi.dev/api/people')
				.then(response => response.json())
				.then(data => {
					setStore({peopleStarWars: data.results})
				})
				.catch(err => err)
			},

			// Fetching SW planets data

			fetchPlanetsStarWars: () =>{
				fetch('https://swapi.dev/api/planets')
				.then(response => response.json())
				.then(data => {
					setStore({planetsStarWars: data.results})
				})
				.catch(err => err)
			},

			// Fetching SW vehicles data
			fetchVehiclesStarWars: () =>{
				fetch('https://swapi.dev/api/vehicles')
				.then(response => response.json())
				.then(data => {
					setStore({vehiclesStarWars: data.results})
				})
				.catch(err => err)
			},

			
			addFavorites: (newItem) => {
				const store = getStore();
				if (!store.favoritesStarWars.includes(newItem)) {
					setStore({favoritesStarWars: [...store.favoritesStarWars, newItem]});
				}
			},
			
			removeFavorites: (item) => {
				const store = getStore();
				setStore({favoritesStarWars: store.favoritesStarWars.filter(favorite => favorite !== item)});
			}
			

		}
	};
};

export default getState;
