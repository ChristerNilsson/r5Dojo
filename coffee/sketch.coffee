[W,H] = [innerWidth,innerHeight]
DAYS = 'Mon Tue Wed Thu fri Sat Sun'.split ' '

p = Raphael 0,0,W,H
p.rect 0,0,W,H
	.attr 'fill' ,'black'

for j in range 7
	x = 0.02*W
	y = 0.12*H*j + 50 
	p.text x,y,DAYS[j]
		.attr 'fill', 'white'
		.attr 'font-size', 0.02*H

for i in range 24
	x = 0.04*W*i + 0.05*W
	y = 0.15*H*j
	p.text x,y,i
		.attr 'fill','white'
		.attr 'font-size', 0.02*H

for i in range 24
	for j in range 7
		do -> 
			x = 0.04*W*i + 0.05*W
			y = 0.12*H*j + 50
			r = _.random 1,0.02*W
			if r > 3
				c = p.circle x,y,r
					.attr 'fill',"hsb(#{(1-r/(.02*W)) * .5}, 1, .75)"
				t = p.text x,y,r
					.attr 'fill','white'
					.attr 'font-size',r
					.hide()
				hide = -> t.hide()
				show = -> t.show()
				p.set c,t
					.hover show, hide
