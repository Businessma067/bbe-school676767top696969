import importlib.util

spec = importlib.util.spec_from_file_location(
    "build", r"C:\Users\bubli\Projects\bbe-school-fixed\textbook\output\_build_ch1_v2.py"
)
build = importlib.util.module_from_spec(spec)
spec.loader.exec_module(build)

BS = chr(92)
raw = "E" + BS + " F = F" + BS + " E"
print("raw:", repr(raw))
print("latexify:", repr(build.latexify(raw)))
print("wrap_mathish:", repr(build.wrap_mathish(raw)))
print("normalize:", repr(build.normalize_math_dollars(build.wrap_mathish(raw))))
