function solution(S) 
//This function uses an object to keep track of the counts of each arrow direction in the input string.
//It then finds the maximum count and returns the difference between the length of the string and the maximum count.
//which represents the minimum number of arrows that need to be rotated to make all arrows point in the same direction.
{
    let counts = { '^': 0, 'v': 0, '<': 0, '>': 0 };
    for (let i = 0; i < S.length; i++) {
      counts[S[i]]++;
    }
    let maxCount = Math.max(...Object.values(counts));
    return S.length - maxCount;
  }

//Note that this implementation assumes that the input string is always valid and contains at least one arrow. 
//If these assumptions don't hold, additional checks should be added to handle these cases. 
  

//random console.logs for test reliability

  console.log(solution('^vv<v'));
  console.log(solution('v>>>vv'));
  console.log(solution('v>vvvvvvvv>>vv'));
  console.log(solution('v>>>>>>><<<<<<<^^^^^^^^>>vv'));
  console.log(solution('^^^^^^^^^^^^^^^^^^^^^^^^^^v>>>vv'));
  console.log(solution('^<>^<><^><v^><^<>>^<vvv>>>vv'));
  console.log(solution('v>>>>>>>>>>>><<<<<<<<<<<<vv>vv'));