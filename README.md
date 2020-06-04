# r5Dojo

Snap.svg verkar hantera transform sämre än Raphael.
T ex adderas ej flera translationer/rotationer.
Dessutom mer att skriva för attr.

Raphael:
	add.translate 0,10
	add.rotate 90
	add.scale 2

Snap:
	add.transform 'translate 0 10'
