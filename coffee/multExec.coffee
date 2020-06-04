[W,H] = [innerWidth,innerHeight]

level = 0 # 0..18
LOW = 1 # 1,6,11...
STEP = 5

tal1 = 0
tal2 = 0
problems = []
SIZE = 30
buttons = []

class Button
	constructor : (@x,@y,@number,@click) ->
		@c = p.circle(@x,@y,SIZE).attr 'fill', "#fff"
		@c.self = @
		@t = p.text(@x,@y,@number).attr 'font-size', 20
		@t.self = @
		p.set @c,@t
			.click @click
	setCol : (col) -> @c.attr {'fill': col}

newGame = (delta) ->
	p.clear()
	p.rect(0,0,W,H).attr {fill: '#888'}
	level += delta
	if level < 0 then level = 0
	if level > 18 then level = 18
	LOW = STEP * level + 1

	buttons = []
	
	new Button 0.2*W,50,"Easy",-> newGame -1
	new Button 0.8*W,50,"Hard",-> newGame 1

	products = {}
	for i in range LOW, LOW+10
		for j in range LOW, LOW+10
			products[i*j] = [i,j]

	numbers = _.keys products
	problems = _.shuffle _.values products
	[tal1,tal2] = problems.pop()

	a = p.text 0.5*W,50,"#{tal1} x #{tal2}"
		.attr {'font-size': 64}

	for number,i in numbers
		x =  70 + 2 * SIZE * (i % 10)
		y = 170 + 2 * SIZE * Math.floor(i / 10)
		number = parseInt number
		buttons[number] = new Button x,y,number, ->
			buttons[tal1*tal2].setCol if @self.number == tal1 * tal2 then "#0f0" else "#f00"
			if problems.length > 0
				[tal1,tal2] = problems.pop()
				if _.random(1,2) == 1 then [tal1,tal2] = [tal2,tal1]
				a.attr {text: "#{tal1} x #{tal2}"}

p = Raphael 0,0,W,H
newGame 0
