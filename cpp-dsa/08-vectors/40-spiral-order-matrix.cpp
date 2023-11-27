#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix){
        vector<int> ans;
        int rows = matrix.size();
        if(rows == 0) return ans;

        int columns = matrix[0].size();
        int startRow = 0, endRow = rows - 1;
        int startColumn = 0, endColumn = columns - 1;

        while(startRow <= endRow && startColumn <= endColumn) {
            for(int i = startColumn; i <= endColumn; ++i)
                ans.push_back(matrix[startRow][i]);
            startRow++;
            for(int i = startRow; i <= endRow; ++i)
                ans.push_back(matrix[i][endColumn]);
            endColumn--;
            if(startRow <= endRow) {
                for(int i = endColumn; i >= startColumn; --i)
                    ans.push_back(matrix[endRow][i]);
                endRow--;
            }
            if(startColumn <= endColumn) {
                for(int i = endRow; i >= startRow; --i)
                    ans.push_back(matrix[i][startColumn]);
                startColumn++;
            }
        }
        return ans;
    }
};
