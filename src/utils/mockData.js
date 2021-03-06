export const mockUser = {
	id: 1,
	name: 'Taylor',
	password: 'password',
	email: "tman2272@aol.com"
}

export const mockSelectedMovie = {
	favorited: false,
	key: 447404,
	movie_id: 447404,
	overview: "In a world where people collect pocket-size monsters (Pokémon) to do battle, a boy comes across an intelligent monster who seeks to be a detective.",
	poster_path: "https://image.tmdb.org/t/p/w300_and_h450_bestv2//wgQ7APnFpf1TuviKHXeEe3KnsTV.jpg",
	release_date: "2019-05-03",
	title: "Pokémon Detective Pikachu",
	vote_average: 7.1
}

export const mockUncleanMovie = {
	id: 447404,
	overview: "In a world where people collect pocket-size monsters (Pokémon) to do battle, a boy comes across an intelligent monster who seeks to be a detective.",
	poster_path: "/wgQ7APnFpf1TuviKHXeEe3KnsTV.jpg",
	release_date: "2019-05-03",
	title: "Pokémon Detective Pikachu",
	vote_average: 7.1,
	extraProp: 8888
}

export const mockFavorites = [
	{
		favorited: true,
		key: 447404,
		movie_id: 447404,
		overview: "In a world where people collect pocket-size monsters (Pokémon) to do battle, a boy comes across an intelligent monster who seeks to be a detective.",
		poster_path: "https://image.tmdb.org/t/p/w300_and_h450_bestv2//wgQ7APnFpf1TuviKHXeEe3KnsTV.jpg",
		release_date: "2019-05-03",
		title: "Pokémon Detective Pikachu",
		vote_average: 7.1
	},
	{
		favorited: true,
		key: 44,
		movie_id: 44,
		overview: "breif overview",
		poster_path: "https://image.tmdb.org/t/p/w300_bestv2//wgQ7APnFpf1TuviKHXeEe3KnsTV.jpg",
		release_date: "2019-05-03",
		title: "HellBoy",
		vote_average: 4
	}
]
