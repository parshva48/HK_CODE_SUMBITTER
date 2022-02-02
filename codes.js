module.exports={
    codesarr:[
        `#include<iostream>

        using namespace std;
        
        int main() {
            int n;
            cin >> n;
        
            float pl = 0, mn = 0, zr = 0;
        
            for (int i = 0; i < n; i++) {
                int val;
                cin >> val;
                zr += (val == 0);
                pl += (val > 0);
                mn += (val < 0);
            }
            
            zr = zr / (double)n;
            pl = pl / (double)n;
            mn = mn / (double)n;
            
            printf("%0.06lf\\n",pl);
            printf("%0.06lf\\n",mn);
            printf("%0.06lf\\n",zr);
            return 0;
        }`,
        `#include <bits/stdc++.h>

        using namespace std;
        
        string ltrim(const string &);
        string rtrim(const string &);
        vector<string> split(const string &);
        
        
        void miniMaxSum(vector<int> arr) {
            int size = arr.size();
            long int sum = 0, min=arr[0], max=arr[0];
            for(int i=0; i<size; i++) {
                sum+=arr[i];
                if(arr[i] < min)    min = arr[i];
                if(arr[i] > max)    max = arr[i];
            }
            cout << sum-max << " " << sum-min << endl;
        }
        int main()
        {
        
            string arr_temp_temp;
            getline(cin, arr_temp_temp);
        
            vector<string> arr_temp = split(rtrim(arr_temp_temp));
        
            vector<int> arr(5);
        
            for (int i = 0; i < 5; i++) {
                int arr_item = stoi(arr_temp[i]);
        
                arr[i] = arr_item;
            }
        
            miniMaxSum(arr);
        
            return 0;
        }
        
        string ltrim(const string &str) {
            string s(str);
        
            s.erase(
                s.begin(),
                find_if(s.begin(), s.end(), not1(ptr_fun<int, int>(isspace)))
            );
        
            return s;
        }
        
        string rtrim(const string &str) {
            string s(str);
        
            s.erase(
                find_if(s.rbegin(), s.rend(), not1(ptr_fun<int, int>(isspace))).base(),
                s.end()
            );
        
            return s;
        }
        
        vector<string> split(const string &str) {
            vector<string> tokens;
        
            string::size_type start = 0;
            string::size_type end = 0;
        
            while ((end = str.find(" ", start)) != string::npos) {
                tokens.push_back(str.substr(start, end - start));
        
                start = end + 1;
            }
        
            tokens.push_back(str.substr(start));
        
            return tokens;
        }`
      ,
      `#include <bits/stdc++.h>

using namespace std;



string timeConversion(string s) {
string time;
if(s[s.length()-2]=='P'){
    if(s[0]=='1'&&s[1]=='2'){
       time=s.substr(0,s.length()-2);
    }else{
        string hour = s.substr(0,2);
        int h=stoi(hour)+12;
        time+=to_string(h)+s.substr(2,s.length()-4);
    }
}
else{
    if(s[0]=='1'&&s[1]=='2'){
         s[0]='0';
         s[1]='0';
        time=s.substr(0,s.length()-2);
    }else{
    time=s.substr(0,s.length()-2);
}
}
return time;
}

int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    string s;
    getline(cin, s);

    string result = timeConversion(s);

    fout << result << "\\n";

    fout.close();

    return 0;
}`
,
`#include <bits/stdc++.h>

using namespace std;

string ltrim(const string &);
string rtrim(const string &);

vector<int> matchingStrings(vector<string> strings, vector<string> queries) {
int n=strings.size();
int m=queries.size();
vector<int> results(m);
for(int i=0;i<m;i++)
results[i]=0;
for(int i=0;i<m;i++)
{
    for(int j=0;j<n;j++)
    {
        if(queries[i]==strings[j])
        results[i]++;
    }
}
return results;
}

int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    string strings_count_temp;
    getline(cin, strings_count_temp);

    int strings_count = stoi(ltrim(rtrim(strings_count_temp)));

    vector<string> strings(strings_count);

    for (int i = 0; i < strings_count; i++) {
        string strings_item;
        getline(cin, strings_item);

        strings[i] = strings_item;
    }

    string queries_count_temp;
    getline(cin, queries_count_temp);

    int queries_count = stoi(ltrim(rtrim(queries_count_temp)));

    vector<string> queries(queries_count);

    for (int i = 0; i < queries_count; i++) {
        string queries_item;
        getline(cin, queries_item);

        queries[i] = queries_item;
    }

    vector<int> res = matchingStrings(strings, queries);

    for (size_t i = 0; i < res.size(); i++) {
        fout << res[i];

        if (i != res.size() - 1) {
            fout << "\\n";
        }
    }

    fout << "\\n";

    fout.close();

    return 0;
}

string ltrim(const string &str) {
    string s(str);

    s.erase(
        s.begin(),
        find_if(s.begin(), s.end(), not1(ptr_fun<int, int>(isspace)))
    );

    return s;
}

string rtrim(const string &str) {
    string s(str);

    s.erase(
        find_if(s.rbegin(), s.rend(), not1(ptr_fun<int, int>(isspace))).base(),
        s.end()
    );

    return s;
}
`,
`#include <bits/stdc++.h>

using namespace std;

string ltrim(const string &);
string rtrim(const string &);
vector<string> split(const string &);


int lonelyinteger(vector<int> a) {
sort(a.begin(),a.end());
if(a[0]!=a[1]||a.size()==1)
    return a[0];
else{
    for(int i=1; i<a.size()-2; i++){
        if((a[i]!=a[i+1]) && (a[i]!=a[i-1]))
            return a[i];}
    }
return a[a.size()-1];
}

int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    string n_temp;
    getline(cin, n_temp);

    int n = stoi(ltrim(rtrim(n_temp)));

    string a_temp_temp;
    getline(cin, a_temp_temp);

    vector<string> a_temp = split(rtrim(a_temp_temp));

    vector<int> a(n);

    for (int i = 0; i < n; i++) {
        int a_item = stoi(a_temp[i]);

        a[i] = a_item;
    }

    int result = lonelyinteger(a);

    fout << result << "\\n";

    fout.close();

    return 0;
}

string ltrim(const string &str) {
    string s(str);

    s.erase(
        s.begin(),
        find_if(s.begin(), s.end(), not1(ptr_fun<int, int>(isspace)))
    );

    return s;
}

string rtrim(const string &str) {
    string s(str);

    s.erase(
        find_if(s.rbegin(), s.rend(), not1(ptr_fun<int, int>(isspace))).base(),
        s.end()
    );

    return s;
}

vector<string> split(const string &str) {
    vector<string> tokens;

    string::size_type start = 0;
    string::size_type end = 0;

    while ((end = str.find(" ", start)) != string::npos) {
        tokens.push_back(str.substr(start, end - start));

        start = end + 1;
    }

    tokens.push_back(str.substr(start));

    return tokens;
}
`
       
        ]
}