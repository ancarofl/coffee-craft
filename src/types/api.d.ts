type CoffeeType = {
	_id: string;
	name: string;
	sizes: string[];
	extras: string[];
};

type CoffeeSize = {
	_id: string;
	name: string;
};

type CoffeeExtraSubselection = {
	_id: string;
	name: string;
};

type CoffeeExtra = {
	_id: string;
	name: string;
	subselections: CoffeeExtraSubselection[];
};

type CoffeeData = {
	_id: string;
	types: CoffeeType[];
	sizes: CoffeeSize[];
	extras: CoffeeExtra[];
};
