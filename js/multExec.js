// Generated by CoffeeScript 2.4.1
var Button, H, LOW, SIZE, STEP, W, buttons, level, newGame, p, problems, tal1, tal2;

[W, H] = [innerWidth, innerHeight];

level = 0; // 0..18

LOW = 1; // 1,6,11...

STEP = 5;

tal1 = 0;

tal2 = 0;

problems = [];

SIZE = 30;

buttons = [];

Button = class Button {
  constructor(x1, y1, number1, click) {
    this.x = x1;
    this.y = y1;
    this.number = number1;
    this.click = click;
    this.c = p.circle(this.x, this.y, SIZE).attr('fill', "#fff");
    this.c.self = this;
    this.t = p.text(this.x, this.y, this.number).attr('font-size', 20);
    this.t.self = this;
    p.set(this.c, this.t).click(this.click);
  }

  setCol(col) {
    return this.c.attr({
      'fill': col
    });
  }

};

newGame = function(delta) {
  var a, i, j, k, l, len, len1, len2, m, number, numbers, products, ref, ref1, results, x, y;
  p.clear();
  p.rect(0, 0, W, H).attr({
    fill: '#888'
  });
  level += delta;
  if (level < 0) {
    level = 0;
  }
  if (level > 18) {
    level = 18;
  }
  LOW = STEP * level + 1;
  buttons = [];
  new Button(0.2 * W, 50, "Easy", function() {
    return newGame(-1);
  });
  new Button(0.8 * W, 50, "Hard", function() {
    return newGame(1);
  });
  products = {};
  ref = range(LOW, LOW + 10);
  for (k = 0, len = ref.length; k < len; k++) {
    i = ref[k];
    ref1 = range(LOW, LOW + 10);
    for (l = 0, len1 = ref1.length; l < len1; l++) {
      j = ref1[l];
      products[i * j] = [i, j];
    }
  }
  numbers = _.keys(products);
  problems = _.shuffle(_.values(products));
  [tal1, tal2] = problems.pop();
  a = p.text(0.5 * W, 50, `${tal1} x ${tal2}`).attr({
    'font-size': 64
  });
  results = [];
  for (i = m = 0, len2 = numbers.length; m < len2; i = ++m) {
    number = numbers[i];
    x = 70 + 2 * SIZE * (i % 10);
    y = 170 + 2 * SIZE * Math.floor(i / 10);
    number = parseInt(number);
    results.push(buttons[number] = new Button(x, y, number, function() {
      buttons[tal1 * tal2].setCol(this.self.number === tal1 * tal2 ? "#0f0" : "#f00");
      if (problems.length > 0) {
        [tal1, tal2] = problems.pop();
        if (_.random(1, 2) === 1) {
          [tal1, tal2] = [tal2, tal1];
        }
        return a.attr({
          text: `${tal1} x ${tal2}`
        });
      }
    }));
  }
  return results;
};

p = Raphael(0, 0, W, H);

newGame(0);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdEV4ZWMuanMiLCJzb3VyY2VSb290IjoiLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxcbXVsdEV4ZWMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFBLE1BQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLE9BQUEsRUFBQSxLQUFBLEVBQUEsT0FBQSxFQUFBLENBQUEsRUFBQSxRQUFBLEVBQUEsSUFBQSxFQUFBOztBQUFBLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBQSxHQUFRLENBQUMsVUFBRCxFQUFZLFdBQVo7O0FBRVIsS0FBQSxHQUFRLEVBRlI7O0FBR0EsR0FBQSxHQUFNLEVBSE47O0FBSUEsSUFBQSxHQUFPOztBQUVQLElBQUEsR0FBTzs7QUFDUCxJQUFBLEdBQU87O0FBQ1AsUUFBQSxHQUFXOztBQUNYLElBQUEsR0FBTzs7QUFDUCxPQUFBLEdBQVU7O0FBRUosU0FBTixNQUFBLE9BQUE7RUFDQyxXQUFjLEdBQUEsSUFBQSxTQUFBLE9BQUEsQ0FBQTtJQUFDLElBQUMsQ0FBQTtJQUFFLElBQUMsQ0FBQTtJQUFFLElBQUMsQ0FBQTtJQUFPLElBQUMsQ0FBQTtJQUM3QixJQUFDLENBQUEsQ0FBRCxHQUFLLENBQUMsQ0FBQyxNQUFGLENBQVMsSUFBQyxDQUFBLENBQVYsRUFBWSxJQUFDLENBQUEsQ0FBYixFQUFlLElBQWYsQ0FBb0IsQ0FBQyxJQUFyQixDQUEwQixNQUExQixFQUFrQyxNQUFsQztJQUNMLElBQUMsQ0FBQSxDQUFDLENBQUMsSUFBSCxHQUFVO0lBQ1YsSUFBQyxDQUFBLENBQUQsR0FBSyxDQUFDLENBQUMsSUFBRixDQUFPLElBQUMsQ0FBQSxDQUFSLEVBQVUsSUFBQyxDQUFBLENBQVgsRUFBYSxJQUFDLENBQUEsTUFBZCxDQUFxQixDQUFDLElBQXRCLENBQTJCLFdBQTNCLEVBQXdDLEVBQXhDO0lBQ0wsSUFBQyxDQUFBLENBQUMsQ0FBQyxJQUFILEdBQVU7SUFD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O01BQ0EsSUFBRyxRQUFRLENBQUMsTUFBVCxHQUFrQixDQUFyQjtRQUNDLENBQUMsSUFBRCxFQUFNLElBQU4sQ0FBQSxHQUFjLFFBQVEsQ0FBQyxHQUFULENBQUE7UUFDZCxJQUFHLENBQUMsQ0FBQyxNQUFGLENBQVMsQ0FBVCxFQUFXLENBQVgsQ0FBQSxLQUFpQixDQUFwQjtVQUEyQixDQUFDLElBQUQsRUFBTSxJQUFOLENBQUEsR0FBYyxDQUFDLElBQUQsRUFBTSxJQUFOLEVBQXpDOztlQUNBLENBQUMsQ0FBQyxJQUFGLENBQU87VUFBQyxJQUFBLEVBQU0sQ0FBQSxDQUFBLENBQUcsSUFBSCxDQUFRLEdBQVIsQ0FBQSxDQUFhLElBQWIsQ0FBQTtRQUFQLENBQVAsRUFIRDs7SUFGd0MsQ0FBdkI7RUFKbkIsQ0FBQTs7QUF6QlM7O0FBb0NWLENBQUEsR0FBSSxPQUFBLENBQVEsQ0FBUixFQUFVLENBQVYsRUFBWSxDQUFaLEVBQWMsQ0FBZDs7QUFDSixPQUFBLENBQVEsQ0FBUiIsInNvdXJjZXNDb250ZW50IjpbIltXLEhdID0gW2lubmVyV2lkdGgsaW5uZXJIZWlnaHRdXHJcblxyXG5sZXZlbCA9IDAgIyAwLi4xOFxyXG5MT1cgPSAxICMgMSw2LDExLi4uXHJcblNURVAgPSA1XHJcblxyXG50YWwxID0gMFxyXG50YWwyID0gMFxyXG5wcm9ibGVtcyA9IFtdXHJcblNJWkUgPSAzMFxyXG5idXR0b25zID0gW11cclxuXHJcbmNsYXNzIEJ1dHRvblxyXG5cdGNvbnN0cnVjdG9yIDogKEB4LEB5LEBudW1iZXIsQGNsaWNrKSAtPlxyXG5cdFx0QGMgPSBwLmNpcmNsZShAeCxAeSxTSVpFKS5hdHRyICdmaWxsJywgXCIjZmZmXCJcclxuXHRcdEBjLnNlbGYgPSBAXHJcblx0XHRAdCA9IHAudGV4dChAeCxAeSxAbnVtYmVyKS5hdHRyICdmb250LXNpemUnLCAyMFxyXG5cdFx0QHQuc2VsZiA9IEBcclxuXHRcdHAuc2V0IEBjLEB0XHJcblx0XHRcdC5jbGljayBAY2xpY2tcclxuXHRzZXRDb2wgOiAoY29sKSAtPiBAYy5hdHRyIHsnZmlsbCc6IGNvbH1cclxuXHJcbm5ld0dhbWUgPSAoZGVsdGEpIC0+XHJcblx0cC5jbGVhcigpXHJcblx0cC5yZWN0KDAsMCxXLEgpLmF0dHIge2ZpbGw6ICcjODg4J31cclxuXHRsZXZlbCArPSBkZWx0YVxyXG5cdGlmIGxldmVsIDwgMCB0aGVuIGxldmVsID0gMFxyXG5cdGlmIGxldmVsID4gMTggdGhlbiBsZXZlbCA9IDE4XHJcblx0TE9XID0gU1RFUCAqIGxldmVsICsgMVxyXG5cclxuXHRidXR0b25zID0gW11cclxuXHRcclxuXHRuZXcgQnV0dG9uIDAuMipXLDUwLFwiRWFzeVwiLC0+IG5ld0dhbWUgLTFcclxuXHRuZXcgQnV0dG9uIDAuOCpXLDUwLFwiSGFyZFwiLC0+IG5ld0dhbWUgMVxyXG5cclxuXHRwcm9kdWN0cyA9IHt9XHJcblx0Zm9yIGkgaW4gcmFuZ2UgTE9XLCBMT1crMTBcclxuXHRcdGZvciBqIGluIHJhbmdlIExPVywgTE9XKzEwXHJcblx0XHRcdHByb2R1Y3RzW2kqal0gPSBbaSxqXVxyXG5cclxuXHRudW1iZXJzID0gXy5rZXlzIHByb2R1Y3RzXHJcblx0cHJvYmxlbXMgPSBfLnNodWZmbGUgXy52YWx1ZXMgcHJvZHVjdHNcclxuXHRbdGFsMSx0YWwyXSA9IHByb2JsZW1zLnBvcCgpXHJcblxyXG5cdGEgPSBwLnRleHQgMC41KlcsNTAsXCIje3RhbDF9IHggI3t0YWwyfVwiXHJcblx0XHQuYXR0ciB7J2ZvbnQtc2l6ZSc6IDY0fVxyXG5cclxuXHRmb3IgbnVtYmVyLGkgaW4gbnVtYmVyc1xyXG5cdFx0eCA9ICA3MCArIDIgKiBTSVpFICogKGkgJSAxMClcclxuXHRcdHkgPSAxNzAgKyAyICogU0laRSAqIE1hdGguZmxvb3IoaSAvIDEwKVxyXG5cdFx0bnVtYmVyID0gcGFyc2VJbnQgbnVtYmVyXHJcblx0XHRidXR0b25zW251bWJlcl0gPSBuZXcgQnV0dG9uIHgseSxudW1iZXIsIC0+XHJcblx0XHRcdGJ1dHRvbnNbdGFsMSp0YWwyXS5zZXRDb2wgaWYgQHNlbGYubnVtYmVyID09IHRhbDEgKiB0YWwyIHRoZW4gXCIjMGYwXCIgZWxzZSBcIiNmMDBcIlxyXG5cdFx0XHRpZiBwcm9ibGVtcy5sZW5ndGggPiAwXHJcblx0XHRcdFx0W3RhbDEsdGFsMl0gPSBwcm9ibGVtcy5wb3AoKVxyXG5cdFx0XHRcdGlmIF8ucmFuZG9tKDEsMikgPT0gMSB0aGVuIFt0YWwxLHRhbDJdID0gW3RhbDIsdGFsMV1cclxuXHRcdFx0XHRhLmF0dHIge3RleHQ6IFwiI3t0YWwxfSB4ICN7dGFsMn1cIn1cclxuXHJcbnAgPSBSYXBoYWVsIDAsMCxXLEhcclxubmV3R2FtZSAwXHJcbiJdfQ==
//# sourceURL=c:\github\r5Dojo\coffee\multExec.coffee