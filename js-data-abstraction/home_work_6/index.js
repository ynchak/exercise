const makePoint = (x, y) => {
  const point = {
    angle: Math.atan2(y, x),
    radius: Math.sqrt((x ** 2) + (y ** 2)),
  };

  return point;
};

// BEGIN (write your solution here)

// END

export { makePoint, getX, getY };