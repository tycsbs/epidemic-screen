export interface ChinaDayAddList {
	date: string;
	y: string;
	confirm: number;
	suspect: number;
	heal: number;
	importedCase: number;
	infect: number;
	dead: number;
	localinfectionadd: number;
	localConfirmadd: number;
	deadRate: string;
	healRate: string;
}

export interface ChinaDayList {
	heal: number;
	nowConfirm: number;
	healRate: string;
	y: string;
	localConfirmH5: number;
	local_acc_confirm: number;
	suspect: number;
	dead: number;
	confirm: number;
	noInfect: number;
	localConfirm: number;
	deadRate: string;
	date: string;
	noInfectH5: number;
	nowSevere: number;
	importedCase: number;
}

export interface CityStati {
	confirm: number;
	zeroNowConfirm: number;
	notZeroNowConfirm: number;
}

export interface ChinaTotal {
	noInfect: number;
	showLocalConfirm: number;
	showlocalinfeciton: number;
	local_acc_confirm: number;
	localWzzAdd: number;
	mRiskTime: string;
	heal: number;
	dead: number;
	suspect: number;
	importedCase: number;
	highRiskAreaNum: number;
	noInfectH5: number;
	nowLocalWzz: number;
	localConfirmAdd: number;
	mediumRiskAreaNum: number;
	localConfirm: number;
	confirm: number;
	nowSevere: number;
	localConfirmH5: number;
	confirmAdd: number;
	deadAdd: number;
	mtime: string;
	nowConfirm: number;
}

export interface ChinaAdd {
	suspect: number;
	nowSevere: number;
	importedCase: number;
	noInfect: number;
	noInfectH5: number;
	confirm: number;
	heal: number;
	nowConfirm: number;
	dead: number;
	localConfirm: number;
	localConfirmH5: number;
}

export interface ShowAddSwitch {
	nowConfirm: boolean;
	importedCase: boolean;
	localConfirm: boolean;
	all: boolean;
	dead: boolean;
	heal: boolean;
	nowSevere: boolean;
	noInfect: boolean;
	localinfeciton: boolean;
	confirm: boolean;
	suspect: boolean;
}

export interface Today {
	confirm: number;
	isUpdated: boolean;
}

export interface Total {
	nowConfirm: number;
	heal: number;
	showHeal: boolean;
	highRiskAreaNum: number;
	continueDayZeroLocalConfirm: number;
	mtime: string;
	showRate: boolean;
	provinceLocalConfirm: number;
	mediumRiskAreaNum: number;
	confirm: number;
	adcode: string;
	dead: number;
	wzz: number;
	continueDayZeroLocalConfirmAdd: number;
}

export interface Today {
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
	tip: string;
	wzz_add: number;
	local_confirm_add: number;
	abroad_confirm_add: number;
	dead_add: number;
}

export interface Total {
	continueDayZeroConfirm: number;
	mtime: string;
	adcode: string;
	nowConfirm: number;
	continueDayZeroConfirmAdd: number;
	heal: number;
	dead: number;
	showRate: boolean;
	continueDayZeroLocalConfirmAdd: number;
	confirm: number;
	wzz: number;
	mediumRiskAreaNum: number;
	highRiskAreaNum: number;
	showHeal: boolean;
	provinceLocalConfirm: number;
}

export interface Today {
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
	wzz_add: string;
	local_confirm_add: number;
}

export interface Total {
	heal: number;
	wzz: number;
	mediumRiskAreaNum: number;
	continueDayZeroLocalConfirmAdd: number;
	continueDayZeroLocalConfirm: number;
	mtime: string;
	dead: number;
	showHeal: boolean;
	highRiskAreaNum: number;
	nowConfirm: number;
	showRate: boolean;
	provinceLocalConfirm: number;
	adcode: string;
	confirm: number;
}

export interface Children {
	today: Today;
	total: Total;
	name: string;
	adcode: string;
	date: string;
}

export interface Children {
	name: string;
	adcode: string;
	date: string;
	today: Today;
	total: Total;
	children: Children[];
}

export interface AreaTree {
	name: string;
	today: Today;
	total: Total;
	children: Children[];
}

export interface Diseaseh5Shelf {
	chinaTotal: ChinaTotal;
	chinaAdd: ChinaAdd;
	isShowAdd: boolean;
	showAddSwitch: ShowAddSwitch;
	areaTree: AreaTree[];
	lastUpdateTime: string;
}


export interface ProvinceCompareItem {
	nowConfirm: number;
	confirmAdd: number;
	dead: number;
	heal: number;
	zero: number;
}

export interface ProvinceCompare {
    [key: string]: ProvinceCompareItem
}

export interface StatisGradeCityDetail {
	date: string;
	mtime: string;
	sdate: string;
	province: string;
	nowConfirm: number;
	confirmAdd: number;
	dead: number;
	heal: number;
	syear: number;
	city: string;
	confirm: number;
	grade: string;
	wzz_add: string;
}

export interface SickDataMo {
	chinaDayAddList: ChinaDayAddList[];
	chinaDayList: ChinaDayList[];
	cityStatis: CityStati;
	diseaseh5Shelf: Diseaseh5Shelf;
	provinceCompare: ProvinceCompare;
	statisGradeCityDetail: StatisGradeCityDetail[];
}

export interface RankListItem {
	name: string;
	continent: string;
	y: string;
	date: string;
	isUpdated: boolean;
	confirmAdd: number;
	confirmAddCut: number;
	confirm: number;
	suspect: number;
	dead: number;
	heal: number;
	nowConfirm: number;
	confirmCompare: number;
	nowConfirmCompare: number;
	healCompare: number;
	deadCompare: number;
}
