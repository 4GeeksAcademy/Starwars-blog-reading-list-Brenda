import React from "react";

import "../../styles/home.css";
import { People } from "./People";
import { Planets } from "./Planets";
import { Vehicles } from "./Vehicles";

export const Home = () => (
	
	<div className=" mt-5 ms-5">
		<People/>
		<Planets/>
		<Vehicles/>
	</div>
	
);
