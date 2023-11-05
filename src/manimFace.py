from manim import *

codeblock = """
x = [2, 3, 5, 4]
sum = 0
for value in x:
\tsum += value
return sum
"""
latex = r"\sum_{i = 1}^{n} i"

class OpeningManim(Scene):
  def construct(self):
    title = Tex(r"This is {termIN} \\ written in math terms")
        # Create the summation symbol
    summation_symbol = MathTex(latex)
    VGroup(title, summation_symbol).arrange(DOWN)
    self.play(
        Write(title, shift=UP),
        FadeIn(summation_symbol, shift=DOWN),
    )
    self.wait(3)

    self.play(
        FadeOut(summation_symbol),
        FadeOut(title)
    )
    # self.wait()
    

    t = Tex(r"This is that same \\ summation in code")
    code = self.build_code_block(codeblock)

    VGroup(t, code).arrange(DOWN)
    self.play(
        FadeIn(t),
        FadeIn(code)
    )
    self.wait(4)


  def build_code_block(self, code_str):
      # build the code block
      code = Code(code=code_str, language='C++', background="window")
      self.add(code)
      # build sliding windows (SurroundingRectangle)
      self.sliding_wins = VGroup()
      height = code.code[0].height
      for line in code.code:
          self.sliding_wins.add(SurroundingRectangle(line).set_fill(YELLOW).set_opacity(0))

      self.add(self.sliding_wins)
      return code
  
  def setFunc(self, latex, code):
     self.latex = latex
     self.code = code
  
# OpeningManim.construct()
# test = OpeningManim()
# test.setFunc(latex, code)
# test.construct()