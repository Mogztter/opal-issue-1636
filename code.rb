@converter_map = {}

def find_converter transform
end

def converter_for transform
  @converter_map[transform] ||= (find_converter transform)
end
