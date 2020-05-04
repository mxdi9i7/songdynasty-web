export const teams = {
	god: '神',
	villager: '民',
	wolf: '狼',
	exile: '流浪',
};

const roles = [
	{
		id: 'witch',
		title: '女巫',
		description:
			'女巫是村民阵营特殊能力最强大的神牌，拥有一瓶解药和一瓶毒药，可以掌控场上玩家的生死，女巫每晚在狼人选择完击杀对象之后睁眼，选择是否使用解药或毒药。其中解药可以救活一名当晚被狼人杀害的玩家，但解药无法对女巫自身使用。当女巫尚未使用解药时可以获悉每晚狼人击杀的对象，使用过解药之后女巫将无法获悉狼人击杀的对象。毒药可以在夜晚毒杀任意一位玩家。解药和毒药不能在同一个夜晚一起使用。',
		team: 'god',
		thumbnail:
			'https://res.cloudinary.com/dtgh01qqo/image/upload/v1581125019/song/newthumb/960a304e251f95cab576e2acc6177f3e6709522c.png',
		notes: '',
	},
	{
		id: 'villager',
		title: '村民',
		description:
			'普通平民没有任何特殊功能，每天白天可以进行发言并参与放逐投票放逐自己心目中的狼人。',
		team: 'villager',
		thumbnail:
			'https://res.cloudinary.com/dtgh01qqo/image/upload/v1581125010/song/newthumb/unnamed_1.jpg',
		notes: '',
	},
	{
		id: 'wolf',
		title: '狼人',
		description:
			'四张狼人牌互相认识，每晚可以共同睁眼杀死任意一名玩家，可以选择空刀或者自刀。狼人可以在白天的警长归票前任意时刻选择自爆，自爆后该名狼人死亡，其他玩家立即结束当前的发言阶段，游戏跳过白天剩余的发言和投票阶段，直接进入黑夜。',
		team: 'wolf',
		thumbnail:
			'https://res.cloudinary.com/dtgh01qqo/image/upload/v1581125630/song/newthumb/unnamed_1.png',
		notes: '',
	},
	{
		id: 'fortune-teller',
		title: '预言家',
		description:
			'预言家是村民阵营中信息量最大的神牌，是村民阵营的灵魂，每晚可以查验游戏中任意一位玩家是属于好人阵营还是狼人阵营，为场上的好人提供信息和指引。',
		team: 'god',
		thumbnail:
			'https://res.cloudinary.com/dtgh01qqo/image/upload/v1581125048/song/newthumb/download.jpg',
		notes: '',
	},
	{
		id: 'hunter',
		title: '猎人',
		description:
			'猎人同样是一张能够杀人的强力神牌。当猎人被狼人杀害或者在白天被放逐出局后，他可以选择翻开身份牌并向场上任意一位活着的玩家发射一颗复仇的子弹，带着这位玩家一起死亡，猎人只要翻了牌就必须带人。当猎人被女巫毒死时，不能开枪带人。若猎人是最后一张死亡的神牌，游戏直接结束，猎人无法开枪。',
		team: 'god',
		thumbnail:
			'https://res.cloudinary.com/dtgh01qqo/image/upload/v1581125011/song/newthumb/1-1Z30109544A06.jpg',
		notes: '',
	},
	{
		id: 'cupid',
		title: '丘比特',
		description:
			'丘比特在第一天晚上指定任意两个人（可以包括他自己），使他们成为情侣。当两个相爱的人其中一个被票死、杀死、毒死或射死，另一个人则必须殉情。情侣之间永远不能互票互杀。因情侣的各自身份不同，丘比特和情侣获胜目标也有所不同，主要分为三种情况1：情侣同为好人，平民阵营胜利，情侣和丘比特都胜利。2：情侣同为狼人，丘比特需帮助平民阵营胜利，情侣则帮助狼人胜利。3：如果情侣的身份为好人和狼人，则形成人狼恋，丘比特和情侣形成第三方阵营，需屠城杀光其他所有人，如果情侣出局，丘比特独活至最后，也可以获胜。特殊：如果两个恋人一个是村民，一个是狼人，他们须消灭除他俩之外的所有游戏者而取胜。',
		team: 'god',
		thumbnail:
			'https://res.cloudinary.com/dtgh01qqo/image/upload/v1581125079/song/newthumb/download_4.jpg',
		notes: '',
	},
	{
		id: 'retard',
		title: '白痴',
		description:
			'白痴这张神牌平时与普通平民无异，但若是他在白天被放逐出局，必须翻牌自证身份，翻牌后的白痴依旧可以在轮到他发言时进行发言，但将失去投票权。翻牌后的白痴无法继续担任警长。',
		team: 'god',
		thumbnail:
			'https://res.cloudinary.com/dtgh01qqo/image/upload/v1581125067/song/newthumb/download_3.jpg',
		notes: '',
	},
	{
		id: 'bastard',
		title: '混血儿',
		description:
			'俗称混混，算作民边，开局时率先睁眼选择一位主人，在本局游戏中混血儿的胜利条件是帮助主人取得胜利，主人为好人则混血儿帮好人，主人为狼人则混血儿帮狼人。主人无法获悉自己被混血儿选为主人，混血儿也无法获悉主人的身份。',
		team: 'exile',
		thumbnail:
			'https://res.cloudinary.com/dtgh01qqo/image/upload/v1581124148/song/006tT5Uqjw1f4xu3x4hzjj3065066aaf.jpg',
		notes: '',
	},
	{
		id: 'shutup-elder',
		title: '禁言长老',
		description:
			'禁言长老每天夜里可以睁眼禁言一位玩家，被禁言的玩家在发言阶段不能说话只能用肢体动作来表达自己的想法。禁言长老不能连续两天禁言同一位玩家。禁言情况将与死讯同时公布。',
		team: 'god',
		thumbnail:
			'https://res.cloudinary.com/dtgh01qqo/image/upload/v1581125013/song/newthumb/images_2.jpg',
		notes: '',
	},
	{
		id: 'guardian',
		title: '守卫',
		description:
			'守卫这张神牌每晚可以守护任意一名玩家，可以选择空守。若被守卫守护的玩家当晚被狼人攻击，因为守卫的保护他将不会死亡。守卫可以守护自己但不能连续两天守护同一位玩家。若守卫守护的玩家恰巧被女巫的解药解救，这位玩家将会死亡。',
		team: 'god',
		thumbnail:
			'https://res.cloudinary.com/dtgh01qqo/image/upload/v1581125010/song/newthumb/01cf225a90dcd5a8012045b3fc2bb1.jpg',
		notes: '',
	},
	{
		id: 'knight',
		title: '骑士',
		description:
			'骑士可以在白天放逐投票前决斗场上任意一位玩家，如果被决斗的玩家是狼人，则该狼人死亡并直接进入黑夜，如果被决斗的玩家是好人，则骑士死亡并继续进行白天原本的流程。',
		team: 'god',
		thumbnail:
			'https://res.cloudinary.com/dtgh01qqo/image/upload/v1581125015/song/newthumb/1d4f3be846d14bb3a57f900b0863b6f0.jpg',
		notes: '',
	},
	{
		id: 'dream-thief',
		title: '摄梦人',
		description:
			'摄梦人每晚必须选择一名玩家成为梦游者，梦游者不知道自己正在梦游，不能选择自己，不能空选。若狼人猎杀梦游者，视为空刀，若女巫毒杀梦游者，毒药将会被浪费，若女巫对梦游者使用解药，解药将会被浪费。摄梦人在夜晚死亡则梦游者一并死亡，连续两晚成为梦游者也会死亡。摄梦人连续两晚摄梦同一位玩家，则梦游者将会被摄梦而死。全局内非连续被选中的第二次按第一晚被选中计算。猎人开枪带走摄梦人，摄梦人和梦游者一起死去。被摄梦人摄梦死亡的猎人和狼王不能发动技能。',
		team: 'god',
		thumbnail:
			'https://res.cloudinary.com/dtgh01qqo/image/upload/v1581125060/song/newthumb/download_2.jpg',
		notes: '',
	},
	{
		id: 'magician',
		title: '魔术师',
		description:
			'魔术师每晚第一个行动，可以交换场上任意两位玩家的号码，在当晚这两位玩家的技能结算结果将会被交换，而到天亮时被交换的号码将会恢复原状。推荐的限定条件是，同一号码不能连续两晚进入魔术师的交换序列。也可以根据现场玩家实力改为以下两种：可以全场任意交换。或者同一号码全场最多只能被交换一次。举例而言，1 号玩家是好人，2号玩家是狼人，魔术师在首夜交换了1 号玩家和2 号玩家的号码，当晚狼刀了1 号玩家。在女巫的行动环节，女巫将会看到1 号玩家被刀，如果女巫不开解药则实际上天亮后死亡的将是2 号玩家。在预言家的行动环节，如果预言家首验1 号玩家，则法官将会反馈给预言家2 号玩家的身份，也就是说法官会告诉预言家她验到的是狼人。另外一种规则是女巫看到的也是2号玩家倒牌。',
		team: 'god',
		thumbnail:
			'https://res.cloudinary.com/dtgh01qqo/image/upload/v1581125053/song/newthumb/download_1.jpg',
		notes: '',
	},
	{
		id: 'thief',
		title: '盗贼',
		description:
			'有盗贼的板子一共会有14张身份牌，每局开局前法官抽出两张身份牌，在确认不是（狼人，狼人）、（狼王，狼人）、（盗贼，狼王）或（盗贼，狼人）这四种组合之后分发其余12张身份牌。盗贼在首夜第一个睁眼，从中法官手中的两张身份牌中选择一张作为自己的身份牌，其中有狼人/狼王时必须选择狼人/狼王。',
		team: 'exile',
		thumbnail:
			'https://res.cloudinary.com/dtgh01qqo/image/upload/v1581125086/song/newthumb/download_5.jpg',
		notes: '',
	},
	{
		id: 'white-wolf-king',
		title: '白狼王',
		description:
			'白狼王是一张特殊的狼人牌，除了拥有和普通狼人一样的功能之外，当白狼王自爆时，可以选择带走场上的任意一位玩家。',
		team: 'wolf',
		thumbnail:
			'https://res.cloudinary.com/dtgh01qqo/image/upload/v1581126066/song/newthumb/t01de43c1f335023944.jpg',
		notes: '',
	},
	{
		id: 'wolf-king',
		title: '狼枪（狼王）',
		description:
			'狼王是一张特殊的狼人牌，当狼王自刀而死、被放逐出局或被猎人枪杀时可以开枪带走一位玩家，俗称狼枪。在狼王局中猎人和狼王死亡后都不能翻牌，而是直接开枪带人，其他玩家无法获悉哪一张是猎人哪一张是狼王。狼王被毒杀或摄梦而死时无法开枪，狼王自爆时不能开枪。',
		team: 'wolf',
		thumbnail:
			'https://res.cloudinary.com/dtgh01qqo/image/upload/v1581126095/song/newthumb/unnamed_3.jpg',
		notes: '',
	},
	// {
	// 	id: '',
	// 	title: '',
	// 	description: '',
	// 	team: '',
	// 	thumbnail: '',
	// 	notes: '',
	// },
];

export default roles;
