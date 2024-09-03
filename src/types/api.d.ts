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

type SelectedCoffeeExtra = {
	extraId: string;
	subselectionId: string;
};

type CoffeeData = {
	_id: string;
	types: CoffeeType[];
	sizes: CoffeeSize[];
	extras: CoffeeExtra[];
};

type CoffeeState = {
	availableCoffeesData: CoffeeData | null;
	typeId: string;
	sizeId: string;
	extras: SelectedCoffeeExtra[];
};
