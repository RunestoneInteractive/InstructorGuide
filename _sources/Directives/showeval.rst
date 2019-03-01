Visualizing how Python Evaluates Expressions
============================================

Helping students develop a good mental model of how Python evaluates expressions is important.  Show eval is useful to help them see how reassignment works, operator precedence, function calls, and more.


.. showeval:: eval2_10_1
    :trace_mode: true

    x = 5
    y = 7
    add(square(y), square(x))
    ~~~~
    {{add}}{{-add-}}(square(y), square(x)) ## add is a function so eval its arguments
    -add-({{square}}{{-square-}}(y), square(x)) ## square is a function so eval its arguments
    -add-(-square-({{y}}{{7}}), square(x))
    -add-({{-square-(7)}}{{49}}, square(x))
    -add-(49, {{square}}{{-square-}}(x)) ## square is a function so eval its arguments
    -add-(49, -square-({{x}}{{5}}))
    -add-(49, {{-square-(5)}}{{25}})
    {{-add-(49, 25)}}{{74}}