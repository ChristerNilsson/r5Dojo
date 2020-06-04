# scale 3 
# set
# rotate
# ett enda click istf två

[W,H] = [innerWidth,innerHeight]

button = (x,y,prompt,click) ->
	c = p.circle(x,y,50).attr 'fill', "#0f0"
	t = p.text(x,y,prompt).attr 'font-size', 32
	p.set c,t
		.click click

p = Raphael 0,0,W,H
p.rect(0,0,W,H).attr {fill: '#888'}
a = p.text 300,100,"0"
a.attr {'font-size': 64}

add = button 200,200,"Add", ->
	a.attr {text: parseInt(a.attrs.text) + 2}
	add.translate 0,10
	add.rotate 90

button 300,200,"Mul", ->
	a.attr {text: parseInt(a.attrs.text) * 2}

button 400,200,"Div", ->
	a.attr {text: parseInt(a.attrs.text) / 2}


# draw = ->
# 	for button in buttons
# 		button.draw()

# mousePressed = ->
# 	for button in buttons	
# 		if button.inside(mouseX,mouseY) 
# 			button.click()