
const FUNCTIONS = [{"name":"ABS","description":"返回参数的绝对�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"ACCRINT","description":"返回定期付息有价证券的应计利�?,"category":"财务函数","usage":"ACCRINT(issue，first_interest，settlement，rate，par，frequency，basis)","params":"","notes":"Issue为有价证券的发行日，First_interest是证券的起息日，Settlement是证券的成交�?即发行日之后证券卖给购买者的日期)，Rate为有价证券的年息票利率，Par为有价证券的票面价�?如果省略par，函数ACCRINT将par看作100)，Frequency为年付息次数(如果按年支付，frequency=1;按半年期支付，frequency=2;按季支付，frequency=4)�?,"example":"","rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"ACCRINTM","description":"返回到期一次性付息有价证券的应计利息","category":"财务函数","usage":"ACCRINTM(issue，maturity，rate，par，basis)","params":"Issue为有价证券的发行日，Maturity为有价证券的到期日，Rate为有价证券的年息票利率，Par为有价证券的票面价值，Basis为日计数基准类型(0或省略时�?0/360�?为实际天�?实际天数�?为实际天�?360�?为实际天�?365�?为欧�?0/360)","notes":"","example":"","rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"ACOS","description":"返回数字的反余弦�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"ACOSH","description":"返回参数的反双曲余弦�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"ADDRESS","description":"通过行号和列号返回单元格引用","category":"查找与引用函�?,"usage":"ADDRESS(row_num，column_num，abs_num，a1，sheet_text)","params":"参数：Row_num是单元格引用中使用的行号；Column_num是单元格引用中使用的列标；Abs_num指明返回的引用类�?1或省略为绝对引用�?绝对行号、相对列标，3相对行号、绝对列标，4是相对引�?；A1是一个逻辑值，它用来指明是以A1或R1C1返回引用样式。如果A1为TRUE或省略，函数ADDRESS返回A1样式的引用；如果A1为FALSE，函数ADDRESS返回R1C1样式的引用。Sheet_text为一文本，指明作为外部引用的工作表的名称，如果省略sheet_text，则不使用任何工作表的名�?,"notes":"","example":"","rating":"","stars":"","hasDetail":true},{"name":"AMORDEGRC","description":"返回每个会计期间的折旧�?此函数是为法国会计系统提供的","category":"财务函数","usage":"AMORDEGRC(cost，date_purchased，first_period，salvage，period，rate，basis)","params":"Cost为资产原值，Date_purchased为购入资产的日期，First_period为第一个期间结束时的日期，Salvage为资产在使用寿命结束时的残值，Period是期间，Rate为折旧率，Basis是所使用的年基准(0或省略时�?60天，1为实际天数，3为一�?65天，4为一�?60�?","notes":"","example":"","rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"AMORLINC","description":"返回每个会计期间的折旧�?该函数为法国会计系统提供","category":"财务函数","usage":"AMORLINC(cost，date_purchased，first_period，salvage，period，rate，basis)","params":"Date_purchased为购入资产的日期，First_period为第一个期间结束时的日期，Salvage为资产在使用寿命结束时的残值，Period为期间，Rate为折旧率，Basis为所使用的年基准(0或省略时�?60天，1为实际天数，3为一�?65天，4为一�?60�?","notes":"","example":"","rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"AND","description":"查看是否满足所有条�?,"category":"逻辑函数","usage":"","params":"参数用逗号分开,最多可以指�?0�?","notes":"和IF函数嵌套使用,可以根据AND函数的判定结�?依据条件分开处理.检测所有的条件是否为真(AND为所有条件满�?OR为任意一个条件满�?","example":"","rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"AREAS","description":"计算指定范围的领域数","category":"查找与引用函�?,"usage":"AREAS(reference)","params":"Reference是对某一单元格或单元格区域的引用，也可以引用多个区域","notes":"如果需要将几个引用指定为一个参数，则必须用括号括起来，以免Excel将逗号作为参数间的分隔�?,"example":"","rating":"","stars":"","hasDetail":true},{"name":"ASC","description":"将字符串中的全角英文字母转换为半角字�?,"category":"文本函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"ASIN","description":"返回参数的反正弦�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"ASINH","description":"返回参数的反双曲正弦�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"ATAN","description":"返回参数的反正切�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"ATAN2","description":"返回给定的X及Y坐标值的反正切�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"ATANH","description":"返回参数的反双曲正切�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"AVEDEV","description":"返回平均偏差","category":"统计函数","usage":"AVEDEV(number1，number2�?..)","params":"Number1、number2�?..是用来计算绝对偏差平均值的一组参数，其个数可以在1�?0个之�?,"notes":"","example":"","rating":"","stars":"","hasDetail":true},{"name":"AVERAGE","description":"返回参数算术平均�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"AVERAGEIF","description":"对满足给定条件的单元格计算算术平均�?,"category":"统计函数","usage":"AVERAGEIF(range, criteria, [average_range])","params":"range：条件判断的范围；criteria：条件（支持比较运算符和通配符）；average_range：可选，实际求平均的范围（省略则�?range 求平均）","notes":"AVERAGEIF 忽略空白单元格和文本。条件需要用引号括起来，�?\">80\"。通配�?? �?* 可用在条件中�?,"example":"=AVERAGEIF(B2:B100, \">80\") —�?计算 B2:B100 中大�?80 的数值的平均�?,"rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"AVERAGEA","description":"计算参数所有数值的算数平均�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"BAHTTEXT","description":"将数值转换为泰语的货币显示形�?,"category":"文本函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"BESSELI","description":"返回�?种修正Bessel函数值Kn(x)","category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"BESSELJ","description":"返回�?种Bessel函数值Kn(x)","category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"BESSELK","description":"返回�?种修正Bessel函数值Kn(x)","category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"BESSELY","description":"返回�?种Bessel函数值Kn(x)","category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"BETADIST","description":"返回Beta分布累积函数的函数�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"BETAINV","description":"返回Beta分布累积函数的反函数�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"BIN2DEC","description":"将二进制数转换为十进�?,"category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"BIN2HEX","description":"将二进制数转换为十六进数","category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"BIN2OCT","description":"将二进制数转换为八进�?,"category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"BINOMDIST","description":"返回一元二项式分布的概率�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"CALL","description":"调用DLL中所含的过程","category":"外部函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"CEILNG","description":"将参数Number沿绝对值增大的方向,舍入为最接通近的整数或基数","category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"CELL","description":"返回单元格的信息","category":"信息函数","usage":"CELL(info_type,reference)","params":"Reference   表示要获取其有关信息的单元格。如果忽略，则在 info_type 中所指定的信息将返回给最后更改的单元格�?,"notes":"","example":"","rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"CHAR","description":"返回对应于文字代码的字符","category":"文本函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"CHIDIST","description":"返回 2分布的单尾概�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"CHINV","description":"返回 2分布单尾概率的反函数","category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"CHITEST","description":"返回独立性检验�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"CHOOSE","description":"从参数列表中选择�?,"category":"查找与引用函�?,"usage":"CHOOSE(index_num，value1，value2�?..)","params":"Index_num是用来指明待选参数序号的值，它必须是1�?9之间的数字、或者是包含数字1�?9的公式或单元格引用；Value1，value2�?..�?�?9个数值参数，可以是数字、单元格，已定义的名称、公式、函数或文本","notes":"","example":"","rating":"","stars":"","hasDetail":true},{"name":"CLEAN","description":"删除文本中不能打印的字符","category":"文本函数","usage":"CLEAN(text)�?,"params":"Text为要从中删除不能打印字符的任何字符串","notes":"","example":"","rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"CODE","description":"返回数字代码","category":"文本函数","usage":"CODE(text)","params":"Text为需要得到其第一个字符代码的文本","notes":"","example":"","rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"COLUMN","description":"返回列编�?,"category":"查找与引用函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"COLUMNS","description":"返回列数","category":"查找与引用函�?,"usage":"COLUMN(reference)","params":"reference为引用的单元�?,"notes":"如果在B11单元格中输入公式:=COLUMN(),也显示出2;与之相对应的还有一个返回行标号值的函数——ROW(reference).","example":"在C11单元格中输入公式:=COLUMN(B11),确认后显示为2（即B列）","rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"COMBIN","description":"计算组合数或二项系数","category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"COMPLEX","description":"通过实部和虚部构成复�?,"category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"CONCATENATE","description":"将若干文字串合并到一个文字串�?,"category":"文本函数","usage":"CONCATENATE(Text1，Text…�?","params":"Text1、Text2……为需要连接的字符文本或引用的单元�?,"notes":"如果参数不是引用的单元格，且为文本格式的，请给参数加上英文状态下的双引号，如果将上述公式改为�?A14&\"@\"&B14&\".com\"，也能达到相同的目的","example":"在C14单元格中输入公式�?CONCATENATE(A14,\"@\",B14,\".com\")，确认后，即可将A14单元格中字符、@、B14单元格中的字符和.com连接成一个整体，显示在C14单元格中�?,"rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"CONFIDENCE","description":"返回数据集的置信区间","category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"CONVERT","description":"将数字从一个度量系统转换到另一个度量系统中","category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"CORREL","description":"返回相关系统","category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"COS","description":"返回给定角度的余弦�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"COSH","description":"返回参数的双曲余弦�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"COUNT","description":"返回日期和数值的个数","category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"COUNTA","description":"返回参数组中非空值的个数","category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"COUNTBLANK","description":"返回参数组中空值的个数","category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"COUNTIF","description":"计算给定区域内满足特定条件的单元格的数目","category":"统计函数","usage":"","params":"RANGE=指定作为搜索对象的单元格区域.即找是否有与条件相配的单元格区域.CRITERIA=指定搜索RANGE单元格的\"条件\",即说明条�?","notes":"指定的条件必须用 \" \" (双引号括起来),�?\">=100、\"男\" �?�?当指定条件为引用单元格时无需双引号括�?通配\n符使用参看SUMIF函数中的通配符说�?","example":"","rating":"★★★☆�?,"stars":"★★★☆�?,"hasDetail":true},{"name":"COUPDAYBS","description":"返回当前付息期内截止到成交日的天�?,"category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"COUPDAYS","description":"返回成交日所在的付息期的天数","category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"COUPDAYSNC","description":"返回从成交日到下一付息日之间的天数","category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"COUPNCD","description":"返回成交日过后的下一付息日的日期","category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"COUPNUM","description":"返回成交日和到期日之间的利息应付次数","category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"COUPPCD","description":"返回成交日之前的上一付息日的日期","category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"COVAR","description":"返回协方�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"CRITBINOM","description":"返回使累积二项式分布大于等于临界值的最小�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"CUMIPMT","description":"返回贷款在给定期间累计偿还和利息数额","category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"CUMPRINC","description":"返回贷款在给定期间累计偿还和本金数额","category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"DATE","description":"通过年、月或日返回日期","category":"日期与时间函�?,"usage":"DATE(year,month,day)","params":"参数 year 可以为一到四�?Excel 将根据所使用的日期系统解�?year 参数.Excel支持1900年和1904年两种日期系�?这两种日期系统使用了不同的日期作为参照基础,00年日期系统规�?900年的1�?日为第一�?其存储的日期系列编号�?,最后天�?999�?2�?1�?04日期系统规定1904�?�?日为第一�?基存储的日期系列�?,最后一天同�?系统默认�?900日期系统.","notes":"Excel按顺序的序列号保存日期，这样就可以对其进行计算。如果工作簿使用的是1900日期系统，则Excel会将1900�?�?日保存为序列�?。同理，会将1998�?�?日保存为序列�?5796，因为该日期距离1900�?�?日为35795�?,"example":"","rating":"★★☆☆�?,"stars":"★★☆☆�?,"hasDetail":true},{"name":"DATEDIF","description":"计算期间内的天数、月数或年数","category":"日期与时间函�?,"usage":"DATEDIF(date1,date2,\"y\")�?DATEDIF(date1,date2,\"m\")�?DATEDIF(date1,date2,\"d\")","params":"date1代表前面一个日期，date2代表后面一个日期；y（m、d）要求返回两个日期相差的年（月、天）数","notes":"这是Excel中的一个隐藏函数，在函数向导中是找不到的，可以直接输入使用，对于计算年龄、工龄等非常有效","example":"","rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"DATEVALUE","description":"将以文字表示的日期转换成系列�?,"category":"日期与时间函�?,"usage":"DATEVALUE(date_text)","params":"Date_text是用Excel日期格式表示日期的文本。在使用1900日期系统中，date_text必须�?900�?�?日到9999�?2�?1日之间的一个日�?而在1904日期系统中，date_text必须�?904�?�?日到9999�?2�?1日之间的一个日期。如果date_text超出上述范围，则函数DATEVaLUE返回错误�?value!","notes":"如果省略参数date_text中的年代，则函数DATEVaLUE使用电脑系统内部时钟的当前年代，且date_text中的时间信息将被忽略","example":"","rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"DAVERAGE","description":"返回满足条件的列的平�?,"category":"数据库函�?,"usage":"DAVERAGE(database，field，criteria)","params":"Database构成列表或数据库的单元格区域。Field指定函数所使用的数据列。Criteria为一组包含给定条件的单元格区域�?,"notes":"","example":"","rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"DAY","description":"从日期中返回\"日\"","category":"日期与时间函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"DAYS360","description":"按照一�?60天的算法,返回两日期间相差的天�?,"category":"日期与时间函�?,"usage":"DAYS360(start_date，end_date，method)","params":"Start_date和end_date是用于计算期间天数的起止日期。如果start_date在end_date之后，则DAYS360将返回一个负数。日期可以有多种输入方式:带引号的文本�?例如:\"1998/01/30\")、序列号(例如:如果使用1900日期系统，则35825表示1998�?�?0�?或其他公式或函数的结�?例如，DATEVaLUE(\"1998/1/30\"))�?,"notes":"Method是一个逻辑值，它指定了在计算中是采用欧洲方法还是美国方法。若为FALSE或忽略，则采用美国方�?如果起始日期是一个月�?1日，则等于同月的30日。如果终止日期是一个月�?1日，并且起始日期早于30日，则终止日期等于下一个月�?日，否则，终止日期等于本月的30�?�?若为TRUE则采用欧洲方�?无论是起始日期还是终止日期为一个月�?31 号，都将等于本月�?30 �?�?,"example":"","rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"DB","description":"用固定余额递减法算计折旧费","category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"DCOUNT","description":"返回满足条件的数值的个数","category":"数据库函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"DCOUNTA","description":"返回满足条件的非空单元格的个�?,"category":"数据库函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"DDB","description":"用双倍余额递减法计算折旧费","category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"DEC2BIN","description":"将十进制数转换为二进制数","category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"DEC2HEX","description":"将十进制数转换为十六进制�?,"category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"DEC2OCT","description":"将十进制数转换为八进制数","category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"DEGREES","description":"将弧度转换为�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"DELTA","description":"测试两个数值是否相�?,"category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"DEVSQ","description":"返回数据点与各自样本均值偏差的平方�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"DGET","description":"寻找满足条件的行","category":"数据库函�?,"usage":"DGET(database，field，criteria)","params":"Database构成列表或数据库的单元格区域。Field指定函数所使用的数据列。Criteria为一组包含给定条件的单元格区域�?,"notes":"","example":"","rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"DISC","description":"返回有价证券的贴现率","category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"DMAX","description":"返回满足条件的最大�?,"category":"数据库函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"DMIN","description":"返回满足条件的最小�?,"category":"数据库函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"DOLLAR","description":"将数值带上美元符号和千位分隔�?,"category":"文本函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"DOLLARDE","description":"将按分数表示的美元价格转换为按小数表�?,"category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"DOLLARFR","description":"将按小数表示的美元价格转换为按分数表�?,"category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"DPRODUCT","description":"返回满足条件的列的积","category":"数据库函�?,"usage":"DPRODUCT(database，field，criteria)","params":"","notes":"","example":"","rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"DSTDEV","description":"通过满足条件的行返回不偏标准偏差","category":"数据库函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"DSTDEVP","description":"通过满足条件的行返回标准偏差","category":"数据库函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"DSUM","description":"返回满足条件的列的合�?,"category":"数据库函�?,"usage":"DSUM(database，field，criteria)","params":"","notes":"","example":"","rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"DURATION","description":"返回定期付息有价证券的修正期�?,"category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"DVAR","description":"通过满足条件的行返回不偏分散","category":"数据库函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"DVARP","description":"通过满足条件的行返回分散","category":"数据库函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"EDATE","description":"返回数月前或数月后的日期","category":"日期与时间函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"EFFECT","description":"返回实际年利�?,"category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"EOMONTH","description":"返回数月前或数月后的月末","category":"日期与时间函�?,"usage":"MONTH(serial_number)","params":"","notes":"如果是给定的日期，请包含在英文双引号中；如果将上述公式修改为�?YEAR(\"2003-12-18\")，则返回年份对应的值�?003”�?,"example":"输入公式�?MONTH(\"2003-12-18\")，确认后，显示出12","rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"ERF","description":"返回误差函数在上下限之间的积�?,"category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"ERFC","description":"返回余误差函数的积分","category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"ERROR.TYPE","description":"查看错误种类","category":"信息函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"EUROCONVERT","description":"欧盟货币的相互转�?,"category":"外部函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"EVEN","description":"返回沿绝对值增大方向取整后最接近的偶�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"EXACT","description":"比较文本,查看是否相等","category":"文本函数","usage":"EXACT(text1，text2)�?,"params":"Text1是待比较的第一个字符串，Text2是待比较的第二个字符串�?,"notes":"","example":"","rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"EXP","description":"返回自然对数的底数e的幂预算","category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"EXPONDIST","description":"返回指数分布的�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"FACT","description":"返回参数的阶�?,"category":"数学与三角函�?,"usage":"FACT（Number�?,"params":"","notes":"","example":"","rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"FACTDOUBLE","description":"返回参数的半阶乘","category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"FDIST","description":"返回F概率分布","category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"FIND","description":"区分大小�?查看文本位置","category":"文本函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"FINDB","description":"区分大小�?查看字节位置","category":"文本函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"FINV","description":"返回F概率分布的反函数�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"FISHER","description":"返回Fisher变换","category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"FISHERINV","description":"返回Fisher变换的反函数数�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"FIXED","description":"将数值带上千位分隔符和小数点标记","category":"文本函数","usage":"FIXED(number，decimals，no_commas)�?,"params":"Number是要进行四舍五入并转换成文字串的�?Decimals为一数值，用以指定小数点右边的小数位数;No_commas为一逻辑值。如果是TRUE，则函数FIXED返回的文字不含逗号。如果no_commas是FALSE或省略，则返回的文字中包含逗号","notes":"","example":"","rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"FLOOR","description":"将参数沿绝对值减小的方向去尾舍入,使其等于最接近的倍数","category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"FORECAST","description":"用回归直线进行预�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"FREQUENCY","description":"返回区间中所含值的个数(频度)","category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"FTEST","description":"返回F检验的结果","category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"FV","description":"返回将来价格","category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"FVSCHEDULE","description":"返回利率发生变动的存款的将来价格","category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"GAMMADIST","description":"返回伽玛分布函数的�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"GAMMAINV","description":"返回伽玛分布函数的反函数�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"GAMMALN","description":"返回伽玛函数的自然对�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"GCD","description":"返回最大公约数","category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"GEOMEAN","description":"返回相乘平均(几何平均�?","category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"GESTEP","description":"查看是否在基准值以�?,"category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"GETPIVOTDATA","description":"(2003/2000)从枢表中读取数据","category":"查找与引用函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"GROWTH","description":"用指数回归曲线进行预�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"HEX2BIN","description":"将十六进制数转换为二进制�?,"category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"HEX2DEC","description":"将十六进制数转换为十进制�?,"category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"HEX2OCT","description":"将十六进制数转换为八进制�?,"category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"HLOOKUP","description":"在数组的首行查找并返回指定单元格的�?,"category":"查找与引用函�?,"usage":"HLOOKUP(Lookup_value,Table_array,Row_index_num,Range_lookup)","params":"","notes":"适用于横长的表格的搜�?搜索的行通常为首�?","example":"","rating":"","stars":"","hasDetail":true},{"name":"HOUR","description":"将序列号转换为小�?,"category":"日期与时间函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"HYPERLINK","description":"创建快捷方式或跳转，以打开存储在网络服务器、Intranet或Internet上的文档","category":"查找与引用函�?,"usage":"HYPERLINK(link_location，friendly_name)","params":"Link_location是文件的路径和文件名，它还可以指向文档中的某个更为具体的位置，如Execl工作表或工作簿中特定的单元格或命名区域，或是指向Word文档中的书签。路径可以是存储在硬盘驱动器上的文件，或是Internet或Intranet上的URL路径；Friendly_name为单元格中显示的链接文字或数字，它用蓝色显示并带有下划线。如果省略了Friendly_name，单元格就将link_location显示为链接�?,"notes":"","example":"","rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"HYPGEOMDIST","description":"返回超几何分�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"IF","description":"指定要执行的逻辑检�?,"category":"逻辑函数","usage":"IF(Logical,Value_if_true,Value_if_false)","params":"参数用逗号分开,最多可以指�?0�?","notes":"03版中最多可以嵌套使�?个IF函数;07版中最多可以嵌�?4个IF函数.","example":"","rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"IMABS","description":"返回复数的绝对值（�?","category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"IMAGINARY","description":"返回复数的虚系数","category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"IMARGUMENT","description":"返回参数 theta，一个以弧度表示的角�?,"category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"IMCONJUGATE","description":"返回复数的共轭复�?,"category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"IMCOS","description":"返回复数的余�?,"category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"IMDIV","description":"返回两个复数的商","category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"IMEXP","description":"返回复数的指�?,"category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"IMLN","description":"返回复数的自然对�?,"category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"IMLOG10","description":"返回复数的常用对�?,"category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"IMLOG2","description":"返回复数的以 2 为底数的对数","category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"IMPOWER","description":"返回复数的整数幂","category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"IMPRODUCT","description":"返回�?2 �?29 的复数的乘积","category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"IMREAL","description":"返回复数的实系数","category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"IMSIN","description":"返回复数的正�?,"category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"IMSQRT","description":"返回复数的平方根","category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"IMSUM","description":"返回两个复数的和","category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"INDEX","description":"(数组形式)","category":"查找与引用函�?,"usage":"INDEX(array,row_num,column_num)","params":"Array代表单元格区域或数组常量；Row_num表示指定的行序号（如果省略row_num，则必须�?column_num）；Column_num表示指定的列序号（如果省略column_num，则必须�?row_num�?,"notes":"此处的行序号参数（row_num）和列序号参数（column_num）是相对于所引用的单元格区域而言的，不是Excel工作表中的行或列序号","example":"","rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"INDIRECT","description":"返回由文本值表示的引用","category":"查找与引用函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"INFO","description":"返回有关当前操作环境的信�?,"category":"信息函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"INT","description":"将数字向下舍入为最接近的整�?,"category":"数学与三角函�?,"usage":"","params":"INT(number)  指定数值或数值所在的单元格费�?参数只能指定一�?且不能指定单元格区域.","notes":"在取整时，不进行四舍五入；如果输入的公式�?INT(-18.89)，则返回结果�?19","example":"","rating":"★☆☆☆�?,"stars":"★☆☆☆�?,"hasDetail":true},{"name":"INTERCEPT","description":"返回线性回归线截距","category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"INTRATE","description":"返回一次性付息证券的利率","category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"IPMT","description":"返回给定期间内投资的利息偿还�?,"category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"IRR","description":"返回一系列现金流的内部收益�?,"category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"ISBLANK","description":"如果值为空，则返�?TRUE","category":"信息函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"ISERR","description":"如果值为�?#N/A 以外的任何错误值，则返�?TRUE","category":"信息函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"ISERROR","description":"如果值为任何错误值，则返�?TRUE","category":"信息函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"ISEVEN","description":"如果数字为偶数，则返�?TRUE","category":"信息函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"ISLOGICAL","description":"如果值为逻辑值，则返�?TRUE","category":"信息函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"ISNA","description":"如果值为 #N/A 错误值，则返�?TRUE","category":"信息函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"ISNONTEXT","description":"如果值不是文本，则返�?TRUE","category":"信息函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"ISNUMBER","description":"如果值为数字，则返回 TRUE","category":"信息函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"ISODD","description":"如果数字为奇数，则返�?TRUE","category":"信息函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"ISPMT","description":"计算在投资的特定期间内支付的利息","category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"ISREF","description":"如果值为一个引用，则返�?TRUE","category":"信息函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"ISTEXT","description":"如果值为文本，则返回 TRUE","category":"信息函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"JIS","description":"将字符串中的半角(单字�?英文字母更改为全�?双字�?字符","category":"文本函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"KURT","description":"返回数据集的峰�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"LARGE","description":"返回数据集中第k个最大�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"LCM","description":"返回最小公倍数","category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"LEFT","description":"返回文本值最左边的字�?,"category":"文本函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"LEN","description":"返回文本字符串中的字符个�?,"category":"文本函数","usage":"LEN(text)","params":"text表示要统计的文本字符�?,"notes":"LEN要统计时，无论中全角字符，还是半角字符，每个字符均计为�?”；与之相对应的一个函数——LENB，在统计时半角字符计为�?”，全角字符计为�?”�?,"example":"假定A41单元格中保存了“我今年28岁”的字符串，我们在C40单元格中输入公式�?LEN(A40)，确认后即显示出统计结果�?”�?,"rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"LINEST","description":"返回线性趋势的参数","category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"LN","description":"返回数字的自然对�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"LOG","description":"返回数字的指定底数的对数","category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"LOG10","description":"返回数字的常用对�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"LOGEST","description":"返回指数趋势的参�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"LOGINV","description":"返回反对数正态分�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"LOGNORMDIST","description":"返回累积对数正态分布函�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"LOOKUP","description":"(向量形式)","category":"查找与引用函�?,"usage":"","params":"英文字母不区分大小写;右移列数从第一列开�?搜索区域为含条件列至结果�?","notes":"只要搜索区域(Lookup_vector区域与Result_vector中的区域相同,即使列或行的对应稍微有点偏差也没关系.\nLookup_vector 的数值必须按升序排序：�?2�?1�?�?�?、…、A-Z、FALSE、TRUE；否则，函数 LOOKUP \n不能返回正确的结�?文本不区分大小写.\nResult_vector  只包含一行或一列的区域,其大小必须与 lookup_vector 相同.","example":"","rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"LOWER","description":"将文本转换为小写形式","category":"文本函数","usage":"LOWER(text)","params":"Text是包含待转换字母的文字串","notes":"LOWER函数不改变文字串中非字母的字符。LOWER与PROPER和UPPER函数非常相似�?,"example":"","rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"MATCH","description":"在引用或数组中查找�?,"category":"查找与引用函�?,"usage":"MATCH(lookup_value,lookup_array,match_type)","params":"Lookup_value代表需要在数据表中查找的数值； \nLookup_array表示可能包含所要查找的数值的连续单元格区域； \nMatch_type表示查找方式的值（-1�?�?�?,"notes":"如果match_type�?1，查找大于或等于 lookup_value的最小数值，Lookup_array 必须按降序排列； \n如果match_type�?，查找小于或等于 lookup_value 的最大数值，Lookup_array 必须按升序排列； \n如果match_type�?，查找等于lookup_value 的第一个数值，Lookup_array 可以按任何顺序排列；如果省略match_type，则默认�?�?\nLookup_array只能为一列或一�?,"example":"在F2单元格中输入公式�?MATCH(E2,B1:B11,0)，确认后则返回查找的结果�?”�?,"rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"MAX","description":"返回参数列表中的最大�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"MAXA","description":"返回参数列表中的最大值，包括数字、文本和逻辑�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"MDETERM","description":"返回数组的矩阵行列式","category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"MDURATION","description":"返回假设面值为 100 的有价证券的 Macauley 修正期限","category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"MEDIAN","description":"返回给定数字的中�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"MID","description":"从文本字符串中的指定位置起返回特定个数的字符","category":"文本函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"MIN","description":"返回参数列表中的最小�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"MINA","description":"返回参数列表中的最小值，包括数字、文本和逻辑�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"MINUTE","description":"将序列号转换为分�?,"category":"日期与时间函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"MINVERSE","description":"返回数组的逆矩�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"MIRR","description":"返回正负现金流在不同利率下支付的内部收益�?,"category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"MMULT","description":"返回两数组的矩阵乘积","category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":true},{"name":"MOD","description":"返回两数相除的余�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"MODE","description":"返回数据集中出现最多的�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"MONTH","description":"将序列号转换为月","category":"日期与时间函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"MROUND","description":"返回按指定倍数舍入后的数字","category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"MULTINOMIAL","description":"返回一组数字的多项�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"N�?,"description":"跳转首行","category":"其他函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"NA","description":"返回错误�?#N/A","category":"信息函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"NEGBINOMDIST","description":"返回负二项式分布","category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"NETWORKDAYS","description":"返回两个日期之间的全部工作日�?,"category":"日期与时间函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"NOMINAL","description":"返回名义年利�?,"category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"NORMDIST","description":"返回正态累积分�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"NORMINV","description":"返回反正态累积分�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"NORMSDIST","description":"返回标准正态累积分�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"NOT","description":"对参数的逻辑值求�?,"category":"逻辑函数","usage":"","params":"指定检测为TRUE(�?或FALSE(�?的逻辑表达�?,不能指定多个参数.","notes":"当计算AND函数或OR函数的结果的反结果时使用.","example":"","rating":"★★☆☆�?,"stars":"★★☆☆�?,"hasDetail":true},{"name":"NOW","description":"返回当前日期和时间的序列�?,"category":"日期与时间函�?,"usage":"NOW()","params":"该函数不需要参�?,"notes":"显示出来的日期和时间格式，可以通过单元格格式进行重新设�?,"example":"输入公式�?NOW()，确认后即刻显示出当前系统日期和时间。如果系统日期和时间发生了改变，只要按一下F9功能键，即可让其随之改变","rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"NPER","description":"返回投资的期�?,"category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"NPV","description":"基于一系列定期的现金流和贴现率，返回一项投资的净现�?,"category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"O�?,"description":"跳转首行","category":"其他函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"OCT2BIN","description":"将八进制数转换为二进制数","category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"OCT2DEC","description":"将八进制数转换为十进制数","category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"OCT2HEX","description":"将八进制数转换为十六进制�?,"category":"工程函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"ODD","description":"将数字向上舍入为最接近的奇型整�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"ODDFPRICE","description":"返回首期付息日不固定的面�?100 的有价证券的价格","category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"ODDFYIELD","description":"返回首期付息日不固定的有价证券的收益�?,"category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"ODDLPRICH","description":"返回末期付息日不固定的面�?100 的有价证券的价格","category":"其他函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"ODDLYIELD","description":"返回末期付息日不固定的有价证券的收益�?,"category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"OFFSET","description":"从给定引用中返回引用偏移�?,"category":"查找与引用函�?,"usage":"OFFSET(reference，rows，cols，height，width)�?,"params":"Reference是作为偏移量参照系的引用区域，它必须是单元格或相连单元格区域的引�?Rows是相对于偏移量参照系的左上角单元格，�?�?偏移的行数。如果使�?作为参数Rows，则说明目标引用区域的左上角单元格比reference�?行。行数可为正�?代表在起始引用的下方)或负�?代表在起始引用的上方);Cols是相对于偏移量参照系的左上角单元格，�?�?偏移的列数。如果使�?作为参数Cols，则说明目标引用区域的左上角的单元格比reference靠右5列。列数可为正�?代表在起始引用的右边)或负�?代表在起始引用的左边);Height是要返回的引用区域的行数，Height必须为正�?Width是要返回的引用区域的列数，Width必须为正�?,"notes":"","example":"","rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"OR","description":"如果任一参数为TRUE，则返回TRUE","category":"逻辑函数","usage":"","params":"OR(logical1,logical2, ...)  参数用逗号分开,最多可以指�?0�?","notes":"和IF函数嵌套使用,可以根据AND函数的判定结�?依据条件分开处理.如果指定的逻辑条件参数中包含非逻辑值时，则函数返回错误值�?VALUE!”或�?NAME�?,"example":"","rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"P�?,"description":"跳转首行","category":"其他函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"PEARSON","description":"返回Pearson乘积矩相关系�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"PERCENTILE","description":"返回区域中的第k个百分位�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"PERCENTRANK","description":"返回数据集中值的百分比排�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"PERMUT","description":"返回给定数目对象的排列数","category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"PI","description":"返回Pi�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"PMT","description":"返回年金的定期付款额","category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"POISSON","description":"返回Poisson分布","category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"POWER","description":"返回数的乘幂结果","category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"PPMT","description":"返回投资在某一给定期间内的本金偿还�?,"category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"PRICE","description":"返回定期付息的面�?100 的有价证券的价格","category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"PRICEDISC","description":"返回折价发行的面�?100 的有价证券的价格","category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"PRICEMAT","description":"返回到期付息的面�?100 的有价证券的价格","category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"PROB","description":"返回区域中的值在上下限之间的概率","category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"PRODUCT","description":"将所有以参数形式给出的数字相�?,"category":"数学与三角函�?,"usage":"","params":"指定想要乘积的�?或单元格引用.也可指定单元格区�?参数数量和SUM一�?30�?.即想要计算的单元�?","notes":"空白单元格被视为0进行计算","example":"","rating":"★★☆☆�?,"stars":"★★☆☆�?,"hasDetail":true},{"name":"PROPER","description":"将文本值中每一个单词的首字母设置为大写","category":"文本函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"PV","description":"返回投资的现�?,"category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"QUARTILE","description":"返回一组数据的四分位点","category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"QUOTIENT","description":"返回商的整数部分，即舍去商的小数部分�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"RADANS","description":"将一个表示角度的数值或参数转换为弧度�?,"category":"其他函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"RAND","description":"R回一个大于等�?小于1的随机数，每次计算工作表(按F9�?将返回一个新的数值�?,"category":"数学与三角函�?,"usage":"RAND()","params":"没有参数,返回的数值具有随机�?因此同一公式返回的值并不相�?而且只要对工作簿进行过任何修改或关闭后重新打开工作�?该函数都会随机返回一个新的数值取代原来的数�?","notes":"","example":"","rating":"★★☆☆�?,"stars":"★★☆☆�?,"hasDetail":true},{"name":"RANDBETWEEN","description":"产生位于两个指定数值之间的一个随机数，每次重新计算工作表(按F9�?都将返回新的数值�?,"category":"数学与三角函�?,"usage":"RAND()","params":"没有参数,返回的数值具有随机�?因此同一公式返回的值并不相�?而且只要对工作簿进行过任何修改或关闭后重新打开工作�?该函数都会随机返回一个新的数值取代原来的数�?","notes":"","example":"","rating":"★★☆☆�?,"stars":"★★☆☆�?,"hasDetail":true},{"name":"RANK","description":"返回一个数值在一组数值中的排�?如果数据清单已经排过序了，则数值的排位就是它当前的位置)","category":"数学与三角函�?,"usage":"RANK（number,ref,order�?,"params":"","notes":"此函数只能对数值排�?","example":"","rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"RATE","description":"返回年金的各期利率。函数RATE通过迭代法计算得出，并且可能无解或有多个解�?,"category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"RECEIVED","description":"返回一次性付息的有价证券到期收回的金额�?,"category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"REPLACE","description":"替换文本内的字符","category":"文本函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"REPLACEB","description":"根据所指定的字节数替换另一文本串中的部分文�?,"category":"文本函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"REPT","description":"按给定次数重复文�?,"category":"文本函数","usage":"REPT(text,number_times)","params":"","notes":"","example":"用REPT函数模拟简单条形图,以更直观的形式反映销售情�?","rating":"★★☆☆�?,"stars":"★★☆☆�?,"hasDetail":true},{"name":"RIGHT","description":"返回文本值最右边的字�?,"category":"文本函数","usage":"RIGHT(text,num_chars)","params":"Num_chars参数必须大于或等�?，如果忽略，则默认其�?；如果num_chars参数大于文本长度，则函数返回整个文本","notes":"从一个文本字符串的最后一个字符开始，截取指定数目的字�?,"example":"假定A65单元格中保存了“我喜欢天极网”的字符串，我们在C65单元格中输入公式�?RIGHT(A65,3)，确认后即显示出“天极网”的字符","rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"ROMAN","description":"将阿拉伯数字转换为文本形式的罗马数字�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"ROUND","description":"按指定位数四舍五入某个数字�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"ROUNDDOWN","description":"按绝对值减小的方向舍入某一数字�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"ROUNDUP","description":"按绝对值增大的方向舍入一个数字�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"ROW","description":"返回给定引用的行号�?,"category":"查找与引用函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"ROWS","description":"返回引用或数组的行数","category":"查找与引用函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"RSQ","description":"返回给定数据点的Pearson乘积矩相关系数的平方�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"RTD","description":"从支持COM自动化的程序中返回实时数据�?,"category":"查找与引用函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"SEARCH","description":"返回从start_num开始首次找到特定字符或文本串的位置编号。\n其中SEARCH以字符数为单位，SEARCHB以字节数为单位�?,"category":"文本函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"SECOND","description":"返回时间值的秒数(�?�?9之间的一个整�?�?,"category":"日期与时间函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"SERIESSUM","description":"返回幂级数的和�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"SIGN","description":"返回数字的符号。正数返�?，零返回0，负数时返回-1�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"SIN","description":"返回某一角度的正弦值�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"SINH","description":"返回任意实数的双曲正弦值�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"SKEW","description":"返回一个分布的不对称度.它反映以平均值为中心的分布的不对称程�?正不对称度表示不对称边的分布更趋向正�?负不对称度表示不对称边的分布更趋向负�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"SLN","description":"返回某项资产在一个期间中的线性折旧�?,"category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"SLOPE","description":"返回经过给定数据点的线性回归拟合线方程的斜�?它是直线上任意两点的垂直距离与水平距离的比值，也就是回归直线的变化�?","category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"SMALL","description":"返回数据集中第k个最小值，从而得到数据集中特定位置上的数值�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"SQL.REQUEST","description":"与外部数据源连接，从工作表运行查询，然后SQL.REQUEST将查询结果以数组的形式返回，而无需进行宏编程�?,"category":"外部函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"SQRT","description":"返回某一正数的算术平方根�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"SQRTPI","description":"返回一个正实数与π的乘积的平方根�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"STANDARDIZE","description":"返回以mean为平均值，以standard-dev为标准偏差的分布的正态化数值�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"STDEV","description":"估算样本的标准偏差。它反映了数据相对于平均�?mean)的离散程度�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"STDEVA","description":"计算基于给定样本的标准偏差。它与STDEV函数的区别是文本值和逻辑�?TRUE或FALSE)也将参与计算�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"STDEVP","description":"返回整个样本总体的标准偏差。它反映了样本总体相对于平均�?mean)的离散程度�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"STDEVPA","description":"计算样本总体的标准偏�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"STEYX","description":"返回通过线性回归法计算y预测值时所产生的标准误�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"SUBSTITUTE","description":"在文字串中用new_text替代old_text","category":"文本函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"SUBTOTAL","description":"返回数据清单或数据库中的分类汇�?,"category":"数学与三角函�?,"usage":"","params":"SUBTOTAL(function_num, ref1, ref2, ...) \n以编号形式指定总计时采用的功能.当指定为1~11�?隐藏的单元格也在总计的对象之�?当指定为101~111�?则忽略隐藏的单元�?不将其视为总计对象.2003版以后的版本才支持此功能.","notes":"如果采取自动筛选，无论function_num参数选用什么类型，SUBTOTAL函数忽略任何不包括在筛选结果中的行；SUBTOTAL函数适用于数据列或垂直区域，不适用于数据行或水平区域�?,"example":"参数最�?9�?","rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"SUM","description":"对满足条件的单元格的数值求�?,"category":"数学与三角函�?,"usage":"SUM（Number1‚Number2……）","params":"参数用逗号分开,最多可以指�?0�?","notes":"可以作为计算对象的有数值、作为文本输入的数字,以及包含上述数值的单元�?空白单元格被视为0计算. 如果参数为数组或引用，只有其中的数字将被计算。数组或引用中的空白单元格、逻辑值、文本或错误值将被忽略；如果\n将上述公式修改为�?SUM(LARGE(D2:D63,{1,2,3,4,5}))，则可以求出�?名成绩的和�?,"example":"如果参数为数组或引用，只有其中的数字将被计算。数组或引用中的空白单元格、逻辑值、文本或错误值将被忽略；如果将上述公式修改为�?SUM(LARGE(D2:D63,{1,2,3,4,5}))，则可以求出�?名成绩的�?,"rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"SUMIF","description":"根据指定条件对若干单元格、区域或引用求和","category":"数学与三角函�?,"usage":"SUMIF（Range‚Criteria‚Sum_Range�?,"params":"RANGE=指定作为搜索对象的单元格区域.即找是否有与条件相配的单元格区域.CRITERIA=指定搜索RANGE单元格的\"条件\",即说明条�?SUM_RANGE=指定求和对象的单元格区域.即要求求和的行或�?","notes":"指定的条件必须用 \" \" (双引号括起来),�?\">=100、\"男\" �?�?当指定条件为引用单元格时无需双引号括�?\n使用SUMIF比VLOOKUP查找更方�?可以避免无匹配时返回的错误的问题.","example":"","rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"SUMPRODUCT","description":"在给定的几组数组中，将数组间对应的元素相乘，并返回乘积之�?,"category":"数学与三角函�?,"usage":"","params":"指定包含构成计算对象的有数值逻辑值或作为文本输入的数字的数组常量,或者包含这些值的单元格区�?空白单元格被视为0.�?几行或列相乘后再相加.","notes":"当参数的指定行×列大小不一样数组时,会返回错误值\"#VALUE!\".","example":"此函数只是少一个小计就能得出结�?也可�?SUM(PRODUCT(B10,C10,E10),PRODUCT(B11,C11,E11),PRODUCT(B12,C12,E12))","rating":"★★★☆�?,"stars":"★★★☆�?,"hasDetail":true},{"name":"SUMSQ","description":"返回所有参数的平方�?,"category":"数学与三角函�?,"usage":"","params":"指定想要乘积的�?或单元格引用.也可指定单元格区�?参数数量和SUM一�?30�?.即想要计算的单元�?","notes":"空白单元格被视为0进行计算","example":"公式�?SUMPRODUCT({3�?;8�?;1�?}，{2�?;6�?;5�?})”的计算结果�?56","rating":"★★☆☆�?,"stars":"★★☆☆�?,"hasDetail":true},{"name":"SUMX2MY2","description":"返回两数组中对应数值的平方差之�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"SUMX2PY2","description":"返回两数组中对应数值的平方和的总和","category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"SUMXMY2","description":"返回两数组中对应数值之差的平方�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"SYD","description":"返回某项资产按年限总和折旧法计算的指定期间的折旧�?,"category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"TAN","description":"返回某一角度的正切�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"TANH","description":"返回任意实数的双曲正切�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"TBILLEQ","description":"返回国库券的等效收益�?,"category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"TBILLPRICH","description":"返回面值100的国库券的价�?,"category":"其他函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"TBILLYIELD","description":"返回国库券的收益�?,"category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"TDIST","description":"返回学生的t分布","category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"TEXT","description":"将数值转换为按指定数字格式表示的文本","category":"文本函数","usage":"TEXT(value,format_text)","params":"RANGE=指定作为搜索对象的单元格区域.即找是否有与条件相配的单元格区域.CRITERIA=指定搜索RANGE单元格的\"条件\",即说明条�?SUM_RANGE=指定求和对象的单元格区域.即要求求和的行或�?","notes":"指定的条件必须用 \" \" (双引号括起来),�?\">=100、\"男\" �?�?当指定条件为引用单元格时无需双引号括�? format_text参数可以根据“单元格格式”对话框“数字”标签中的类型进行确定�?,"example":"","rating":"★★★☆�?,"stars":"★★★☆�?,"hasDetail":true},{"name":"TIME","description":"返回某一特定时间的小数�?,"category":"日期与时间函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"TIMEVALUE","description":"返回用文本串表示的时间小数�?,"category":"日期与时间函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"TINV","description":"返回作为概率和自由度函数的学生氏t分布的t�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"TODAY","description":"返回系统当前日期的序列号","category":"日期与时间函�?,"usage":"TODAY()","params":"该函数不需要参�?","notes":"输入公式�?TODAY()，确认后即刻显示出系统日期和时间。如果系统日期和时间发生了改变，只要按一下F9功能键，即\n可让其随之改�?","example":"","rating":"★★☆☆�?,"stars":"★★☆☆�?,"hasDetail":true},{"name":"TRANSPOSE","description":"返回区域的转�?,"category":"查找与引用函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"TREND","description":"返回一条线性回归拟合线的一组纵坐标�?y�?","category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"TRIM","description":"除了单词之间的单个空格外，清除文本中的所有的空格","category":"文本函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"TRIMMEAN","description":"返回数据集的内部平均�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"TRUNC","description":"将数字的小数部分截去，返回整�?,"category":"数学与三角函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"TTEST","description":"返回与学生氏-t检验相关的概率","category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"TYPE","description":"返回数值的类型","category":"信息函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"UPPER","description":"将文本转换成大写形式","category":"文本函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"VALUE","description":"将表示数字的文字串转换成数字","category":"文本函数","usage":"VALUE(text)","params":"text代表需要转换文本型字符串数�?,"notes":"如果文本型数值不经过上述转换，在用函数处理这些数值时，常常返回错�?,"example":"如果B74单元格中是通过LEFT等函数截取的文本型字符串，我们在C74单元格中输入公式�?VALUE(B74)，确认后，即可将其转换为数值型","rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"VAR","description":"估算样本方差","category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"VARA","description":"用来估算给定样本的方�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"VARP","description":"计算样本总体的方�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"VARPA","description":"计算样本总体的方�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"VDB","description":"使用余额递减法，返回指定期间内或部分期间内的某项资产折旧�?,"category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"VLOOKUP","description":"在数组第一列中查找，然后在行之间移动以返回单元格的�?,"category":"查找与引用函�?,"usage":"VLOOKUP(lookup_value‚table_array‚col_index_num‚range_lookup)","params":"英文字母不区分大小写;右移列数从第一列开�?搜索区域为含条件列至结果�?","notes":"适用于纵长的表格的搜�?搜索的列通常为首�?当搜索不到满足值时,返回错误值\"#N/A\".当超出搜索区域时,返回错误值\"#REF\". Lookup_value参见必须在Table_array区域的首列中；如果忽略Range_lookup参数，则Table_array的首列必须进行排序；在此函数的向导中，有关Range_lookup参数的用法是错误�?,"example":"","rating":"★★☆☆�?,"stars":"★★☆☆�?,"hasDetail":true},{"name":"XLOOKUP","description":"Office 365 新函数，在表格中按行或列查找值，支持向左/向右/模糊查找","category":"查找与引用函�?,"usage":"XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])","params":"lookup_value：要查找的值；lookup_array：查找数组（行或列）；return_array：返回数组；if_not_found：找不到时返回的值（省略则返�?N/A）；match_mode：匹配模式（0=精确匹配�?=近似匹配�?1=精确匹配或下一个更小值，2=通配符匹配）；search_mode：搜索模式（1=从上到下�?1=从下到上�?=二进制升序，-2=二进制降序）","notes":"XLOOKUP �?VLOOKUP 的升级版，可以向左查找、不需要排序列、默认精确匹配。支持模糊查找和反向查找�?,"example":"=XLOOKUP(\"苹果\", A:A, B:B, \"未找到\") —�?�?A 列查找「苹果」，返回 B 列对应值，找不到返回「未找到�?,"rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"FILTER","description":"根据条件筛选数组，返回匹配条件的所有行/列（动态数组函数）","category":"查找与引用函�?,"usage":"FILTER(array, include, [if_empty])","params":"array：要筛选的数组或范围；include：布尔值数组（TRUE/FALSE），指定筛选条件；if_empty：可选，当没有匹配项时返回的值（省略则返�?CALC!�?,"notes":"FILTER 返回动态数组，结果会自动溢出到相邻单元格。可以按多列条件组合筛选�?,"example":"=FILTER(A2:C100, B2:B100>80) —�?筛选出 B 列大�?80 的所有行，返�?A:C 列对应数�?,"rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"UNIQUE","description":"返回数组中的唯一值（去重），Office 365 动态数组函�?,"category":"文本函数","usage":"UNIQUE(array, [by_col], [exactly_once])","params":"array：要提取唯一值的数组或范围；by_col：可选，TRUE 按列比较，FALSE 或省略按行比较；exactly_once：可选，TRUE 只返回只出现一次的值，FALSE 或省略返回所有唯一�?,"notes":"UNIQUE 返回动态数组。搭�?COUNTA 可以统计不重复个数：=COUNTA(UNIQUE(A:A))�?,"example":"=UNIQUE(A2:A100) —�?提取 A2:A100 中的所有不重复�?,"rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"SORT","description":"对数组进行排序，Office 365 动态数组函�?,"category":"文本函数","usage":"SORT(array, [sort_index], [sort_order], [by_col])","params":"array：要排序的数组或范围；sort_index：可选，按第几列/行排序（默认1）；sort_order：可选，1=升序（默认）�?1=降序；by_col：可选，TRUE 按列排序，FALSE 或省略按行排�?,"notes":"SORT 返回动态数组。可以按多列排序，嵌�?SORT 即可：SORT(SORT(array,1,1),2,-1)�?,"example":"=SORT(A2:C100, 3, -1) —�?按第 3 列降序排�?A:C 的数�?,"rating":"★★★★�?,"stars":"★★★★�?,"hasDetail":true},{"name":"WEEKDAY","description":"返回某日期的星期�?,"category":"日期与时间函�?,"usage":"WEEKDAY(serial_number,return_type)","params":"serial_number代表指定的日期或引用含有日期的单元格；return_type代表星期的表示方式[当Sunday（星期日）为1、Saturday（星期六）为7时，该参数为1；当Monday（星期一）为1、Sunday（星期日）为7时，该参数为2（这种情况符合中国人的习惯）；当Monday（星期一）为0、Sunday（星期日）为6时，该参数为3]�?,"notes":"如果是指定的日期，请放在英文状态下的双引号中，�?WEEKDAY(\"2003-12-18\",2)","example":"输入公式�?WEEKDAY(TODAY(),2)，确认后即给出系统日期的星期数�?,"rating":"★★☆☆�?,"stars":"★★☆☆�?,"hasDetail":true},{"name":"WEEKNUM","description":"返回一个数字，该数字代表一年中的第几周","category":"日期与时间函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"WEIBULL","description":"返回韦伯分布","category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"WORKDAY","description":"返回指定工作日数之前或之后某日期的序列号","category":"日期与时间函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"XIRR","description":"返回一组不定期发生的现金流的内部收益率","category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"XNPV","description":"返回一组不定期发生的现金流的净现�?,"category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"YEAP","description":"返回某日期的年份。其结果�?900�?999之间的一个整�?,"category":"其他函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"YEARFRAC","description":"返回start_date和end_date之间的天数占全年天数的百分比","category":"日期与时间函�?,"usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"YIELD","description":"返回定期付息有价证券的收益率，函数YIELD用于计算债券收益�?,"category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"YIELDDISC","description":"返回折价发行的有价证券的年收益率","category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"YIELDMAT","description":"返回到期付息的有价证券的年收益率","category":"财务函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false},{"name":"ZTEST","description":"返回z检验的双尾P�?,"category":"统计函数","usage":"","params":"","notes":"","example":"","rating":"","stars":"","hasDetail":false}];
const CAT_META = {"日期与时间函�?:{"icon":"📅","color":"#3b82f6","bg":"#eff6ff"},"数学与三角函�?:{"icon":"📐","color":"#10b981","bg":"#ecfdf5"},"逻辑函数":{"icon":"🔀","color":"#f59e0b","bg":"#fffbeb"},"查找与引用函�?:{"icon":"🔍","color":"#8b5cf6","bg":"#f5f3ff"},"数据库函�?:{"icon":"🗄�?,"color":"#ef4444","bg":"#fef2f2"},"文本函数":{"icon":"📝","color":"#14b8a6","bg":"#f0fdfa"},"统计函数":{"icon":"📊","color":"#6366f1","bg":"#eef2ff"},"财务函数":{"icon":"💰","color":"#d97706","bg":"#fffbeb"},"工程函数":{"icon":"⚙️","color":"#dc2626","bg":"#fef2f2"},"信息函数":{"icon":"ℹ️","color":"#0891b2","bg":"#ecfeff"},"外部函数":{"icon":"🔌","color":"#7c3aed","bg":"#f5f3ff"},"其他函数":{"icon":"📦","color":"#6b7280","bg":"#f9fafb"}};

// ── 难度数据 ──────────────────────────────────────────────
const DIFFICULTY = {
  // 入门 easy
  "IF":"easy","SUM":"easy","MAX":"easy","MIN":"easy","AVERAGE":"easy","LEN":"easy","LEFT":"easy","RIGHT":"easy",
  "TODAY":"easy","NOW":"easy","ABS":"easy","ROUND":"easy","INT":"easy","MOD":"easy",
  // 进阶 medium
  "AND":"medium","OR":"medium","NOT":"medium","VLOOKUP":"medium","HLOOKUP":"medium","COUNTIF":"medium",
  "SUMIF":"medium","TEXT":"medium","MID":"medium","FIND":"medium","SUBSTITUTE":"medium","TRIM":"medium",
  "DATE":"medium","YEAR":"medium","MONTH":"medium","DAY":"medium","RANK":"medium","WEEKDAY":"medium",
  "CEILING":"medium","FLOOR":"medium",
  // 高级 hard
  "IFS":"hard","INDEX":"hard","MATCH":"hard","OFFSET":"hard","INDIRECT":"hard","COUNTIFS":"hard",
  "SUMIFS":"hard","SUMPRODUCT":"hard","DATEDIF":"hard"
};
const DIFF_LABELS = { easy:'🟢 入门', medium:'🟡 进阶', hard:'🔴 高级' };

// ── 相关函数推荐 ──────────────────────────────────────────
const RELATED = {
  "IF":["AND","OR","IFS","NOT"],"AND":["IF","OR","NOT","IFS"],"OR":["IF","AND","NOT"],"IFS":["IF","AND","OR"],
  "NOT":["IF","AND","OR"],"VLOOKUP":["HLOOKUP","INDEX","MATCH","OFFSET","INDIRECT"],"HLOOKUP":["VLOOKUP","INDEX","MATCH"],
  "INDEX":["MATCH","OFFSET","VLOOKUP"],"MATCH":["INDEX","VLOOKUP","OFFSET"],"OFFSET":["INDEX","MATCH","INDIRECT"],
  "INDIRECT":["OFFSET","INDEX","ADDRESS"],"LEFT":["RIGHT","MID","LEN","FIND"],"RIGHT":["LEFT","MID","LEN"],
  "MID":["LEFT","RIGHT","LEN","FIND"],"LEN":["LEFT","RIGHT","MID","TRIM"],"FIND":["LEFT","MID","SUBSTITUTE"],
  "SUBSTITUTE":["TRIM","FIND","TEXT"],"TRIM":["LEN","SUBSTITUTE","CLEAN"],"TEXT":["DATE","TODAY","NOW"],
  "TODAY":["NOW","DATE","DATEDIF","YEAR","MONTH","DAY"],"NOW":["TODAY","TEXT"],"DATE":["TODAY","YEAR","MONTH","DAY"],
  "YEAR":["MONTH","DAY","DATE","TODAY"],"MONTH":["YEAR","DAY","DATE"],"DAY":["YEAR","MONTH","DATE"],
  "DATEDIF":["TODAY","DATE","YEAR"],"WEEKDAY":["TODAY","DATE","IF"],"COUNTIF":["COUNTIFS","SUMIF","SUMIFS"],
  "COUNTIFS":["COUNTIF","SUMIFS","SUMPRODUCT"],"SUMIF":["SUMIFS","COUNTIF","AVERAGEIF"],
  "SUMIFS":["SUMIF","COUNTIFS","SUMPRODUCT"],"AVERAGE":["SUM","COUNTIF","MAX","MIN"],"MAX":["MIN","RANK","LARGE"],
  "MIN":["MAX","RANK","SMALL"],"RANK":["MAX","MIN","COUNTIF"],"SUM":["SUMIF","SUMIFS","SUMPRODUCT"],
  "ROUND":["CEILING","FLOOR","INT","MOD"],"INT":["ROUND","FLOOR","MOD"],"MOD":["INT","FLOOR","ROUND"],
  "ABS":["ROUND","INT"],"CEILING":["FLOOR","ROUND","INT"],"FLOOR":["CEILING","ROUND","INT"],
  "SUMPRODUCT":["SUMIFS","COUNTIFS","INDEX"]
};

const CAT_COUNTS = {"数学与三角函�?:59,"财务函数":51,"查找与引用函�?:18,"逻辑函数":4,"文本函数":27,"统计函数":77,"工程函数":38,"外部函数":3,"信息函数":16,"日期与时间函�?:20,"数据库函�?:12,"其他函数":7};

let activeCategory = 'all';
let searchQuery = '';
let sortMode = 'name';
let showFavOnly = false;

// ── 收藏夹（localStorage持久化）────────────────────────────
const FAV_KEY = 'excel_fav_v1';
function loadFavs() { try { return JSON.parse(localStorage.getItem(FAV_KEY) || '[]'); } catch(e) { return []; } }
function saveFavs(arr) { localStorage.setItem(FAV_KEY, JSON.stringify(arr)); }
let favSet = new Set(loadFavs());

function toggleFav(fnName, e) {
  if (e) e.stopPropagation();
  if (favSet.has(fnName)) favSet.delete(fnName); else favSet.add(fnName);
  saveFavs([...favSet]);
  render();
  updateModalFavBtn(fnName);
}

function toggleFavFilter() {
  showFavOnly = !showFavOnly;
  const btn = document.getElementById('favFilterBtn');
  btn.classList.toggle('fav-active', showFavOnly);
  render();
}

function updateModalFavBtn(fnName) {
  const btn = document.getElementById('modalFavBtn');
  if (!btn) return;
  const isFav = favSet.has(fnName);
  btn.innerHTML = isFav ? '�?已收�? : '�?收藏';
  btn.classList.toggle('active', isFav);
}

function toggleModalFav() {
  if (!currentModalFn) return;
  toggleFav(currentModalFn, null);
}

// ── 暗色模式 ────────────────────────────────────────────────
const THEME_KEY = 'excel_theme_v1';
function loadTheme() {
  const t = localStorage.getItem(THEME_KEY);
  if (t) document.documentElement.setAttribute('data-theme', t);
  updateThemeBtn();
}
function toggleTheme() {
  const cur = document.documentElement.getAttribute('data-theme');
  const next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem(THEME_KEY, next);
  updateThemeBtn();
}
function updateThemeBtn() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  btn.textContent = isDark ? '☀�? : '🌙';
  btn.title = isDark ? '切换到亮色模�? : '切换到暗色模�?;
}
loadTheme();

// Init header stats (QUIZ_DATA 统计延迟�?QUIZ_DATA 定义后执行，见脚本末�?
const totalFns = FUNCTIONS.length;
const withDetail = FUNCTIONS.filter(f => f.hasDetail).length;
const categories = [...new Set(FUNCTIONS.map(f => f.category))].length;

// Build filter tags
const tagContainer = document.getElementById('filterTags');
const allTag = createTag('all', '全部', Object.values(CAT_COUNTS).reduce((a,b)=>a+b,0), '#2563eb', '#eff6ff', true);
tagContainer.appendChild(allTag);

const catOrder = ['日期与时间函�?,'数学与三角函�?,'逻辑函数','查找与引用函�?,'数据库函�?,'文本函数','统计函数','财务函数','工程函数','信息函数','外部函数','其他函数'];
catOrder.forEach(cat => {
  const meta = CAT_META[cat] || { icon: '📦', color: '#6b7280', bg: '#f9fafb' };
  const count = CAT_COUNTS[cat] || 0;
  if (count === 0) return;
  const tag = createTag(cat, meta.icon + ' ' + cat, count, meta.color, meta.bg, false);
  tagContainer.appendChild(tag);
});

function createTag(cat, label, count, color, bg, active) {
  const tag = document.createElement('div');
  tag.className = 'tag' + (active ? ' active' : '');
  tag.style.color = color;
  tag.style.backgroundColor = bg;
  tag.innerHTML = `${label} <span class="tag-count">${count}</span>`;
  tag.onclick = () => setCategory(cat);
  tag._cat = cat;
  return tag;
}

function setCategory(cat) {
  activeCategory = cat;
  document.querySelectorAll('.tag').forEach(t => {
    const isActive = t._cat === cat;
    t.classList.toggle('active', isActive);
  });
  render();
}

document.getElementById('searchInput').addEventListener('input', e => {
  searchQuery = e.target.value.toLowerCase();
  render();
});

document.getElementById('sortSelect').addEventListener('change', e => {
  sortMode = e.target.value;
  render();
});
function getFiltered() {
  let fns = FUNCTIONS;
  if (activeCategory !== 'all') fns = fns.filter(f => f.category === activeCategory);
  if (searchQuery) {
    fns = fns.filter(f =>
      f.name.toLowerCase().includes(searchQuery) ||
      f.description.toLowerCase().includes(searchQuery) ||
      f.category.includes(searchQuery) ||
      (f.usage && f.usage.toLowerCase().includes(searchQuery)) ||
      (f.params && f.params.toLowerCase().includes(searchQuery)) ||
      (f.example && f.example.toLowerCase().includes(searchQuery))
    );
  }
  if (showFavOnly) fns = fns.filter(f => favSet.has(f.name));
  const diff = document.getElementById('diffSelect') ? document.getElementById('diffSelect').value : 'all';
  if (diff !== 'all') fns = fns.filter(f => DIFFICULTY[f.name] === diff);
  if (sortMode === 'name') fns = [...fns].sort((a,b) => a.name.localeCompare(b.name));
  else if (sortMode === 'category') fns = [...fns].sort((a,b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
  else if (sortMode === 'detail') fns = [...fns].sort((a,b) => (b.hasDetail?1:0)-(a.hasDetail?1:0) || a.name.localeCompare(b.name));
  else if (sortMode === 'fav') fns = [...fns].sort((a,b) => (favSet.has(b.name)?1:0)-(favSet.has(a.name)?1:0) || a.name.localeCompare(b.name));
  return fns;
}

function render() {
  const fns = getFiltered();
  const grid = document.getElementById('functionGrid');
  const empty = document.getElementById('emptyState');
  const countEl = document.getElementById('resultsCount');
  
  countEl.innerHTML = `�?<strong>${fns.length}</strong> 个函�?{searchQuery ? ' (搜索: "'+searchQuery+'"�? : ''}`;
  
  if (fns.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';
  
  grid.innerHTML = fns.map(f => {
    const meta = CAT_META[f.category] || CAT_META['其他函数'];
    const starsHtml = f.stars ? `<div class="card-stars">${f.stars}</div>` : '';
    const usageHtml = f.usage ? `<div class="card-usage">${escHtml(f.usage)}</div>` : '';
    const detailBadge = f.hasDetail ? '<div class="card-detail-badge">📖 含详细示�?/div>' : '';
    const hasQuiz = !!(QUIZ_DATA[f.name] && QUIZ_DATA[f.name].length > 0);
    const prog = quizProgress[f.name] || {};
    const doneCnt = Object.values(prog).filter(r => r && r.answered).length;
    const totalCnt = hasQuiz ? QUIZ_DATA[f.name].length : 0;
    const quizBadge = hasQuiz
      ? `<div class="card-quiz-badge">🎯 练习�?${doneCnt > 0 ? doneCnt+'/'+totalCnt : totalCnt+'�?}</div>`
      : '';
    const diff = DIFFICULTY[f.name];
    const diffBadge = diff ? `<div class="card-diff-badge diff-${diff}">${DIFF_LABELS[diff]}</div>` : '';
    const isFav = favSet.has(f.name);
    const favBadge = isFav ? '<div class="card-fav-badge">�?已收�?/div>' : '';
    return `
      <div class="card" style="color:${meta.color}" onclick="openModal('${escHtml(f.name)}')">
        <button class="card-fav-btn ${isFav ? 'active' : ''}" title="${isFav ? '取消收藏' : '收藏'}" onclick="toggleFav('${escHtml(f.name)}', event)">${isFav ? '�? : '�?}</button>
        <div class="card-header">
          <div class="card-name" style="color:${meta.color}">${escHtml(f.name)}</div>
          <div class="card-badge" style="background:${meta.bg};color:${meta.color}">${meta.icon} ${escHtml(f.category)}</div>
        </div>
        <div class="card-desc">${escHtml(f.description)}</div>
        ${usageHtml}
        ${starsHtml}
        ${detailBadge}
        ${quizBadge}
        ${diffBadge}
        ${favBadge}
      </div>
    `;
  }).join('');
}

function escHtml(str) {
  return String(str||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

const fnMap = {};
FUNCTIONS.forEach(f => { fnMap[f.name] = f; });

function openModal(name) {
  const f = fnMap[name];
  if (!f) return;
  currentModalFn = name;
  const meta = CAT_META[f.category] || CAT_META['其他函数'];
  
  document.getElementById('modalName').textContent = f.name;
  document.getElementById('modalName').style.color = meta.color;
  document.getElementById('modalDesc').textContent = f.description;
  
  // 练习�?Tab
  const hasQuiz = !!(QUIZ_DATA[name] && QUIZ_DATA[name].length > 0);
  const quizTabBtn = document.getElementById('quizTabBtn');
  quizTabBtn.style.display = hasQuiz ? '' : 'none';
  if (hasQuiz) {
    const prog = quizProgress[name] || {};
    const done = Object.values(prog).filter(r => r && r.answered).length;
    document.getElementById('quizTabBadge').textContent = `${done}/${QUIZ_DATA[name].length}`;
  }
  // 收藏按钮状�?  updateModalFavBtn(name);
  // 切换到详�?Tab
  switchTab('detail');
  
  let body = `<div class="modal-section">
    <div class="modal-cat-badge" style="background:${meta.bg};color:${meta.color}">${meta.icon} ${escHtml(f.category)}</div>
    ${f.stars ? '<div class="stars-display">'+escHtml(f.stars)+'</div>' : ''}
  </div>`;
  
  if (f.usage) {
    body += `<div class="modal-section">
      <div class="modal-section-label">语法格式</div>
      <div class="usage-block">${escHtml(f.usage)}</div>
      <button class="copy-btn" onclick="copyText('${escHtml(f.usage)}')">📋 复制语法</button>
    </div>`;
  }
  
  if (f.params) {
    body += `<div class="modal-section">
      <div class="modal-section-label">参数说明</div>
      <div class="params-block">${escHtml(f.params)}</div>
    </div>`;
  }
  
  if (f.notes) {
    body += `<div class="modal-section">
      <div class="modal-section-label">注意事项</div>
      <div class="notes-block">${escHtml(f.notes)}</div>
    </div>`;
  }
  
  if (f.example) {
    body += `<div class="modal-section">
      <div class="modal-section-label">应用实例</div>
      <div class="example-block">${escHtml(f.example)}</div>
    </div>`;
  }
  
  if (!f.usage && !f.params && !f.notes && !f.example) {
    body += `<div class="modal-section">
      <div class="modal-section-label">功能描述</div>
      <div class="modal-section-content">${escHtml(f.description)}</div>
    </div>`;
  }

  if (hasQuiz) {
    body += `<div class="modal-section" style="margin-top:8px;">
      <button class="quiz-start-inline-btn" onclick="switchTab('quiz')" style="display:inline-flex;align-items:center;gap:6px;padding:8px 18px;background:linear-gradient(135deg,#fbbf24,#f59e0b);color:#fff;border:none;border-radius:999px;font-size:0.85rem;font-weight:600;cursor:pointer;box-shadow:0 2px 6px rgba(245,158,11,.3);transition:var(--transition);">📝 去做练习�?/button>
    </div>`;
  }

  // ── 难度标签 ──
  const diff = DIFFICULTY[name];
  if (diff) {
    body += `<div class="modal-section">
      <div class="modal-section-label">学习难度</div>
      <div><span class="card-diff-badge diff-${diff}" style="font-size:0.82rem;">${DIFF_LABELS[diff]}</span></div>
    </div>`;
  }

  // ── 相关函数推荐 ──
  const related = RELATED[name];
  if (related && related.length > 0) {
    const existRelated = related.filter(r => fnMap[r]);
    if (existRelated.length > 0) {
      body += `<div class="modal-section">
        <div class="modal-section-label">相关函数</div>
        <div class="related-fns">
          ${existRelated.map(r => `<span class="related-fn-chip" onclick="closeModalBtn();setTimeout(()=>openModal('${r}'),50)">${r}</span>`).join('')}
        </div>
      </div>`;
    }
  }
  
  document.getElementById('modalBody').innerHTML = body;
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e.target === document.getElementById('modal')) closeModalBtn();
}
function closeModalBtn() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}

function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    const btn = event.target;
    btn.textContent = '�?已复�?;
    setTimeout(() => { btn.textContent = '📋 复制语法'; }, 1500);
  });
}

// ── 截图功能 ──────────────────────────────────────────────
function toggleScreenshotMenu(e) {
  e.stopPropagation();
  const menu = document.getElementById('screenshotMenu');
  const isOpen = menu.style.display !== 'none';
  menu.style.display = isOpen ? 'none' : 'block';
  if (!isOpen) {
    // 点击其他地方关闭菜单
    const close = () => { menu.style.display = 'none'; document.removeEventListener('click', close); };
    setTimeout(() => document.addEventListener('click', close), 0);
  }
}

function doScreenshot(mode) {
  document.getElementById('screenshotMenu').style.display = 'none';
  const btn = document.getElementById('screenshotBtn');
  const modal = document.querySelector('.modal');
  const fnName = document.getElementById('modalName').textContent.trim() || 'function';

  btn.classList.add('capturing');
  btn.textContent = '�?生成中�?;

  requestAnimationFrame(() => {
    setTimeout(() => {
      try {
        const canvas = buildCanvas(modal);
        canvas.toBlob(blob => {
          if (mode === 'clipboard') {
            copyBlobToClipboard(blob, btn);
          } else if (mode === 'savepicker') {
            saveWithPicker(blob, fnName, btn);
          } else {
            downloadBlob(blob, fnName, btn);
          }
        }, 'image/png');
      } catch(e) {
        alert('截图失败�? + e.message);
        btn.classList.remove('capturing');
        btn.innerHTML = '📷 截图 �?;
      }
    }, 60);
  });
}

// 复制到剪贴板（最推荐，无文件安全问题�?async function copyBlobToClipboard(blob, btn) {
  try {
    await navigator.clipboard.write([
      new ClipboardItem({ 'image/png': blob })
    ]);
    btn.classList.remove('capturing');
    btn.innerHTML = '�?已复�?;
    setTimeout(() => { btn.innerHTML = '📷 截图 �?; }, 2000);
  } catch(e) {
    // 剪贴板权限被拒绝，降级到下载
    alert('剪贴板复制失败（需要HTTPS或浏览器权限），已改为直接下载。\n如需复制，请在浏览器地址栏点击🔒图标允许剪贴板权限�?);
    const fnName = document.getElementById('modalName').textContent.trim() || 'function';
    downloadBlob(blob, fnName, btn);
  }
}

// 用系统文件选择器另存（保存的文件不�?Zone.Identifier 安全标记�?async function saveWithPicker(blob, fnName, btn) {
  if (!window.showSaveFilePicker) {
    // 不支持时降级到下�?    downloadBlob(blob, fnName, btn);
    return;
  }
  try {
    const handle = await window.showSaveFilePicker({
      suggestedName: 'Excel函数_' + fnName + '.png',
      types: [{ description: 'PNG 图片', accept: { 'image/png': ['.png'] } }]
    });
    const writable = await handle.createWritable();
    await writable.write(blob);
    await writable.close();
    btn.classList.remove('capturing');
    btn.innerHTML = '�?已保�?;
    setTimeout(() => { btn.innerHTML = '📷 截图 �?; }, 2000);
  } catch(e) {
    // 用户取消或不支持
    if (e.name !== 'AbortError') {
      downloadBlob(blob, fnName, btn);
    } else {
      btn.classList.remove('capturing');
      btn.innerHTML = '📷 截图 �?;
    }
  }
}

// 直接下载（部分情况下Windows安全策略可能拦截�?function downloadBlob(blob, fnName, btn) {
  const blobUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = 'Excel函数_' + fnName + '.png';
  link.href = blobUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
  btn.classList.remove('capturing');
  btn.innerHTML = '�?已下�?;
  setTimeout(() => { btn.innerHTML = '📷 截图 �?; }, 2000);
}

function screenshotElement(el, fnName, btn) {
  const canvas = buildCanvas(el);
  canvas.toBlob(blob => {
    downloadBlob(blob, fnName, btn);
  }, 'image/png');
}

function buildCanvas(el) {
  // 收集所�?section 内容（不依赖 html2canvas�?  const sections = el.querySelectorAll('.modal-header, .modal-section');
  
  // ── Canvas 绘制参数 ──
  const W = 700;
  const PADDING = 32;
  const INNER_W = W - PADDING * 2;
  const FONT_BODY = '14px -apple-system, "Microsoft YaHei", sans-serif';
  const FONT_MONO = '13px Consolas, "Courier New", monospace';

  // 先用临时 canvas 测量文字高度
  const tmpC = document.createElement('canvas');
  const tmpCtx = tmpC.getContext('2d');

  function measureTextLines(ctx, text, maxW, font) {
    ctx.font = font;
    const words = text.split('');
    let line = '', lines = [];
    for (let ch of words) {
      const test = line + ch;
      if (ctx.measureText(test).width > maxW && line) {
        lines.push(line);
        line = ch;
      } else {
        line = test;
      }
    }
    if (line) lines.push(line);
    return lines;
  }

  // 提取结构化数�?  const fnNameText  = document.getElementById('modalName').textContent;
  const fnDescText  = document.getElementById('modalDesc').textContent;
  const catBadge    = el.querySelector('.modal-cat-badge');
  const catText     = catBadge ? catBadge.textContent.trim() : '';
  // �?getComputedStyle 读取 badge 的实际渲染颜色（CSS background 简写无法通过 .style 读取�?  const catBadgeStyle = catBadge ? window.getComputedStyle(catBadge) : null;
  const catBgColor  = catBadgeStyle ? catBadgeStyle.backgroundColor : 'rgba(239,246,255,1)';
  const catFgColor  = catBadgeStyle ? catBadgeStyle.color : '#2563eb';
  const starsEl     = el.querySelector('.stars-display');
  const starsText   = starsEl ? starsEl.textContent.trim() : '';
  const fnColor     = document.getElementById('modalName').style.color || '#2563eb';

  // 收集�?section
  const sectionData = [];
  el.querySelectorAll('.modal-section').forEach(sec => {
    const label = sec.querySelector('.modal-section-label');
    const usageBlock  = sec.querySelector('.usage-block');
    const paramsBlock = sec.querySelector('.params-block');
    const exBlock     = sec.querySelector('.example-block');
    const notesBlock  = sec.querySelector('.notes-block');
    const plainBlock  = sec.querySelector('.modal-section-content');

    if (!label) return;
    const labelText = label.textContent.trim();
    let content = '', type = 'plain';

    if (usageBlock)  { content = usageBlock.textContent.trim();  type = 'code'; }
    else if (paramsBlock) { content = paramsBlock.textContent.trim(); type = 'params'; }
    else if (exBlock)    { content = exBlock.textContent.trim();     type = 'example'; }
    else if (notesBlock) { content = notesBlock.textContent.trim();  type = 'notes'; }
    else if (plainBlock) { content = plainBlock.textContent.trim();  type = 'plain'; }

    if (content) sectionData.push({ label: labelText, content, type });
  });

  // ── 计算总高�?──
  const LINE_H = 22;
  const BLOCK_PADDING = 12;
  let totalH = 0;

  // 顶部 header 区：名称 + 描述 + 标签
  totalH += PADDING;       // top pad
  totalH += 40;            // fn name
  totalH += 24;            // fn desc
  totalH += 10;            // gap
  if (catText) totalH += 28;
  if (starsText) totalH += 24;
  totalH += 20;            // divider gap

  sectionData.forEach(s => {
    totalH += 20;  // label
    totalH += 6;   // gap

    const font = s.type === 'code' ? FONT_MONO : FONT_BODY;
    const textW = INNER_W - BLOCK_PADDING * 2;
    const lines = measureTextLines(tmpCtx, s.content, textW, font);
    totalH += lines.length * LINE_H + BLOCK_PADDING * 2;
    totalH += 16; // section gap
  });

  totalH += PADDING; // bottom pad

  // ── 绘制 ──
  const canvas = document.createElement('canvas');
  const DPR = 2; // retina
  canvas.width  = W * DPR;
  canvas.height = totalH * DPR;
  canvas.style.width  = W + 'px';
  canvas.style.height = totalH + 'px';
  const ctx = canvas.getContext('2d');
  ctx.scale(DPR, DPR);

  // 背景
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, W, totalH);

  // 顶部彩色�?  const grad = ctx.createLinearGradient(0, 0, W, 0);
  grad.addColorStop(0, '#1e3a8a');
  grad.addColorStop(0.5, '#2563eb');
  grad.addColorStop(1, '#0ea5e9');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, 6);

  let y = PADDING;

  // 函数�?  ctx.font = 'bold 26px Consolas, "Courier New", monospace';
  ctx.fillStyle = fnColor || '#2563eb';
  ctx.fillText(fnNameText, PADDING, y + 28);
  y += 40;

  // 描述
  ctx.font = FONT_BODY;
  ctx.fillStyle = '#64748b';
  ctx.fillText(fnDescText, PADDING, y + 16);
  y += 24 + 10;

  // 分类标签（使用从 DOM 读取的实际颜色，确保与页面一致且对比度足够）
  if (catText) {
    ctx.font = 'bold 12px -apple-system, "Microsoft YaHei", sans-serif';
    const badgeW = ctx.measureText(catText).width + 28;
    // 背景：使用实际背景色
    roundRect(ctx, PADDING, y, badgeW, 22, 11);
    ctx.fillStyle = catBgColor;
    ctx.fill();
    // 文字：对原始颜色加深以确保对比度（将 rgb 通道乘以 0.6 得到深色版本�?    ctx.fillStyle = darkenRgbColor(catFgColor, 0.55);
    ctx.fillText(catText, PADDING + 14, y + 15);
    y += 28;
  }

  // 星级
  if (starsText) {
    ctx.font = '16px serif';
    ctx.fillStyle = '#f59e0b';
    ctx.fillText(starsText, PADDING, y + 16);
    y += 24;
  }

  // 分隔�?  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(PADDING, y + 6);
  ctx.lineTo(W - PADDING, y + 6);
  ctx.stroke();
  y += 20;

  // �?section
  const typeStyles = {
    code:    { bg: '#1e1e3e', text: '#a8d8ea', label: '#94a3b8' },
    params:  { bg: '#fafafa', text: '#374151', label: '#6366f1' },
    example: { bg: '#fffbeb', text: '#92400e', label: '#d97706' },
    notes:   { bg: '#eff6ff', text: '#1e40af', label: '#3b82f6' },
    plain:   { bg: '#f8fafc', text: '#1e293b', label: '#64748b' },
  };

  sectionData.forEach(s => {
    const st = typeStyles[s.type] || typeStyles.plain;

    // Label
    ctx.font = 'bold 11px -apple-system, "Microsoft YaHei", sans-serif';
    ctx.fillStyle = st.label;
    ctx.fillText(s.label.toUpperCase(), PADDING, y + 14);
    y += 20 + 6;

    // Block background
    const font = s.type === 'code' ? FONT_MONO : FONT_BODY;
    const textW = INNER_W - BLOCK_PADDING * 2;
    const lines = measureTextLines(tmpCtx, s.content, textW, font);
    const blockH = lines.length * LINE_H + BLOCK_PADDING * 2;

    roundRect(ctx, PADDING, y, INNER_W, blockH, 6);
    ctx.fillStyle = st.bg;
    ctx.fill();

    // Text
    ctx.font = font;
    ctx.fillStyle = st.text;
    lines.forEach((line, i) => {
      ctx.fillText(line, PADDING + BLOCK_PADDING, y + BLOCK_PADDING + (i + 1) * LINE_H - 4);
    });

    y += blockH + 16;
  });

  // 底部水印
  ctx.font = '11px -apple-system, "Microsoft YaHei", sans-serif';
  ctx.fillStyle = '#cbd5e1';
  const watermark = 'Excel 函数大全 · 交互式参考手�?;
  const wmW = ctx.measureText(watermark).width;
  ctx.fillText(watermark, W - PADDING - wmW, totalH - 12);

  return canvas;
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

// �?computed rgb(...) 颜色加深，factor 越小越深�?.55 = 55% 亮度�?function darkenRgbColor(rgbStr, factor) {
  const m = (rgbStr || '').match(/\d+/g);
  if (m && m.length >= 3) {
    const r = Math.round(parseInt(m[0]) * factor);
    const g = Math.round(parseInt(m[1]) * factor);
    const b = Math.round(parseInt(m[2]) * factor);
    return `rgb(${r},${g},${b})`;
  }
  return '#1e293b'; // 默认深色兜底
}

function lightenColor(hex, amount) {
  // convert color to rgba with high alpha (light bg)
  try {
    const tmp = document.createElement('div');
    tmp.style.color = hex;
    document.body.appendChild(tmp);
    const computed = getComputedStyle(tmp).color;
    document.body.removeChild(tmp);
    const m = computed.match(/\d+/g);
    if (m) return `rgba(${m[0]},${m[1]},${m[2]},${amount})`;
  } catch(e) {}
  return '#eff6ff';
}
// ── 截图功能结束 ──────────────────────────────────────────

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (document.getElementById('wrongBookModal').classList.contains('open')) { closeWrongBookBtn(); return; }
    if (document.getElementById('quizCenter').classList.contains('open')) { closeQuizCenter(); return; }
    closeModalBtn();
  }
  if ((e.ctrlKey||e.metaKey) && e.key === 'f') {
    e.preventDefault();
    document.getElementById('searchInput').focus();
  }
});

// ══════════════════════════════════════════════════════════
// ── 练习题数�?─────────────────────────────────────────────
// ══════════════════════════════════════════════════════════
const QUIZ_DATA = {
  "ABS": [
    { type:"choice", question:"ABS 函数属于哪一类？", options:["数学与三角函�?,"其他函数","查找与引用函�?,"信息函数"], answer:0, explanation:"ABS 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?ABS 函数的正确功能描述？", options:["返回参数的绝对�?,"返回余误差函数的积分","返回复数的正�?,"返回假设面值为 100 的有价证券的 Macauley 修正期限"], answer:0, explanation:"ABS 函数的功能是：返回参数的绝对�? }
  ],
  "ACCRINT": [
    { type:"choice", question:"ACCRINT 函数属于哪一类？", options:["财务函数","工程函数","统计函数","文本函数"], answer:0, explanation:"ACCRINT 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?ACCRINT 函数的正确功能描述？", options:["返回定期付息有价证券的应计利�?,"返回给定的X及Y坐标值的反正切�?,"返回参数组中空值的个数","返回给定数据点的Pearson乘积矩相关系数的平方�?], answer:0, explanation:"ACCRINT 函数的功能是：返回定期付息有价证券的应计利息" }
  ],
  "ACCRINTM": [
    { type:"choice", question:"ACCRINTM 函数属于哪一类？", options:["财务函数","逻辑函数","文本函数","外部函数"], answer:0, explanation:"ACCRINTM 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?ACCRINTM 函数的正确功能描述？", options:["返回到期一次性付息有价证券的应计利息","区分大小�?查看文本位置","将文本转换成大写形式","将数字向上舍入为最接近的奇型整�?], answer:0, explanation:"ACCRINTM 函数的功能是：返回到期一次性付息有价证券的应计利息" }
  ],
  "ACOS": [
    { type:"choice", question:"ACOS 函数属于哪一类？", options:["数学与三角函�?,"外部函数","信息函数","财务函数"], answer:0, explanation:"ACOS 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?ACOS 函数的正确功能描述？", options:["返回数字的反余弦�?,"返回反对数正态分�?,"返回某一正数的算术平方根�?,"(数组形式)"], answer:0, explanation:"ACOS 函数的功能是：返回数字的反余弦�? }
  ],
  "ACOSH": [
    { type:"choice", question:"ACOSH 函数属于哪一类？", options:["数学与三角函�?,"财务函数","信息函数","其他函数"], answer:0, explanation:"ACOSH 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?ACOSH 函数的正确功能描述？", options:["返回参数的反双曲余弦�?,"返回反正态累积分�?,"返回经过给定数据点的线性回归拟合线方程的斜�?它是直线上任意两点的垂直距离与水平距离的比值，也就是回归直线的变化�?","返回数据集中出现最多的�?], answer:0, explanation:"ACOSH 函数的功能是：返回参数的反双曲余弦�? }
  ],
  "ADDRESS": [
    { type:"choice", question:"ADDRESS 函数属于哪一类？", options:["查找与引用函�?,"其他函数","统计函数","外部函数"], answer:0, explanation:"ADDRESS 属于 查找与引用函数�? },
    { type:"choice", question:"以下哪个�?ADDRESS 函数的正确功能描述？", options:["通过行号和列号返回单元格引用","与外部数据源连接，从工作表运行查询，然后SQL.REQUEST将查询结果以数组的形式返回，而无需进行宏编程�?,"计算样本总体的标准偏�?,"按绝对值增大的方向舍入一个数字�?], answer:0, explanation:"ADDRESS 函数的功能是：通过行号和列号返回单元格引用" }
  ],
  "AMORDEGRC": [
    { type:"choice", question:"AMORDEGRC 函数属于哪一类？", options:["财务函数","统计函数","外部函数","信息函数"], answer:0, explanation:"AMORDEGRC 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?AMORDEGRC 函数的正确功能描述？", options:["返回每个会计期间的折旧�?此函数是为法国会计系统提供的","返回面值100的国库券的价�?,"返回从start_num开始首次找到特定字符或文本串的位置编号�?其中SEARCH以字符数为单位，SEARCHB以字节数为单位�?,"返回参数列表中的最大�?], answer:0, explanation:"AMORDEGRC 函数的功能是：返回每个会计期间的折旧�?此函数是为法国会计系统提供的" }
  ],
  "AMORLINC": [
    { type:"choice", question:"AMORLINC 函数属于哪一类？", options:["财务函数","数学与三角函�?,"工程函数","数据库函�?], answer:0, explanation:"AMORLINC 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?AMORLINC 函数的正确功能描述？", options:["返回每个会计期间的折旧�?该函数为法国会计系统提供","返回标准正态累积分�?,"返回数字的反余弦�?,"返回使累积二项式分布大于等于临界值的最小�?], answer:0, explanation:"AMORLINC 函数的功能是：返回每个会计期间的折旧�?该函数为法国会计系统提供" }
  ],
  "AND": [
    { type:"choice", question:"AND 函数属于哪一类？", options:["逻辑函数","日期与时间函�?,"外部函数","财务函数"], answer:0, explanation:"AND 属于 逻辑函数�? },
    { type:"choice", question:"以下哪个�?AND 函数的正确功能描述？", options:["查看是否满足所有条�?,"计算样本总体的方�?,"返回年金的定期付款额","返回�?种修正Bessel函数值Kn(x)"], answer:0, explanation:"AND 函数的功能是：查看是否满足所有条�? }
  ],
  "AREAS": [
    { type:"choice", question:"AREAS 函数属于哪一类？", options:["查找与引用函�?,"统计函数","外部函数","其他函数"], answer:0, explanation:"AREAS 属于 查找与引用函数�? },
    { type:"choice", question:"以下哪个�?AREAS 函数的正确功能描述？", options:["计算指定范围的领域数","返回Fisher变换的反函数数�?,"返回经过给定数据点的线性回归拟合线方程的斜�?它是直线上任意两点的垂直距离与水平距离的比值，也就是回归直线的变化�?","返回一元二项式分布的概率�?], answer:0, explanation:"AREAS 函数的功能是：计算指定范围的领域�? }
  ],
  "ASC": [
    { type:"choice", question:"ASC 函数属于哪一类？", options:["文本函数","逻辑函数","信息函数","日期与时间函�?], answer:0, explanation:"ASC 属于 文本函数�? },
    { type:"choice", question:"以下哪个�?ASC 函数的正确功能描述？", options:["将字符串中的全角英文字母转换为半角字�?,"返回�?种Bessel函数值Kn(x)","返回作为概率和自由度函数的学生氏t分布的t�?,"返回满足条件的列的合�?], answer:0, explanation:"ASC 函数的功能是：将字符串中的全角英文字母转换为半角字符" }
  ],
  "ASIN": [
    { type:"choice", question:"ASIN 函数属于哪一类？", options:["数学与三角函�?,"外部函数","信息函数","文本函数"], answer:0, explanation:"ASIN 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?ASIN 函数的正确功能描述？", options:["返回参数的反正弦�?,"返回数据集中第k个最小值，从而得到数据集中特定位置上的数值�?,"返回首期付息日不固定的有价证券的收益�?,"返回参数列表中的最小值，包括数字、文本和逻辑�?], answer:0, explanation:"ASIN 函数的功能是：返回参数的反正弦�? }
  ],
  "ASINH": [
    { type:"choice", question:"ASINH 函数属于哪一类？", options:["数学与三角函�?,"信息函数","外部函数","查找与引用函�?], answer:0, explanation:"ASINH 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?ASINH 函数的正确功能描述？", options:["返回参数的反双曲正弦�?,"返回�?种Bessel函数值Kn(x)","返回复数的余�?,"跳转首行"], answer:0, explanation:"ASINH 函数的功能是：返回参数的反双曲正弦�? }
  ],
  "ATAN": [
    { type:"choice", question:"ATAN 函数属于哪一类？", options:["数学与三角函�?,"外部函数","查找与引用函�?,"统计函数"], answer:0, explanation:"ATAN 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?ATAN 函数的正确功能描述？", options:["返回参数的反正切�?,"返回一次性付息的有价证券到期收回的金额�?,"返回国库券的等效收益�?,"对参数的逻辑值求�?], answer:0, explanation:"ATAN 函数的功能是：返回参数的反正切�? }
  ],
  "ATAN2": [
    { type:"choice", question:"ATAN2 函数属于哪一类？", options:["数学与三角函�?,"逻辑函数","外部函数","统计函数"], answer:0, explanation:"ATAN2 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?ATAN2 函数的正确功能描述？", options:["返回给定的X及Y坐标值的反正切�?,"返回某一正数的算术平方根�?,"返回数月前或数月后的月末","返回参数的反双曲正弦�?], answer:0, explanation:"ATAN2 函数的功能是：返回给定的X及Y坐标值的反正切�? }
  ],
  "ATANH": [
    { type:"choice", question:"ATANH 函数属于哪一类？", options:["数学与三角函�?,"财务函数","查找与引用函�?,"外部函数"], answer:0, explanation:"ATANH 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?ATANH 函数的正确功能描述？", options:["返回参数的反双曲正切�?,"返回数字的符号。正数返�?，零返回0，负数时返回-1�?,"将十六进制数转换为二进制�?,"返回两个复数的和"], answer:0, explanation:"ATANH 函数的功能是：返回参数的反双曲正切�? }
  ],
  "AVEDEV": [
    { type:"choice", question:"AVEDEV 函数属于哪一类？", options:["统计函数","文本函数","数据库函�?,"逻辑函数"], answer:0, explanation:"AVEDEV 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?AVEDEV 函数的正确功能描述？", options:["返回平均偏差","返回复数的整数幂","返回参数组中空值的个数","将参数沿绝对值减小的方向去尾舍入,使其等于最接近的倍数"], answer:0, explanation:"AVEDEV 函数的功能是：返回平均偏�? }
  ],
  "AVERAGE": [
    { type:"choice", question:"AVERAGE 函数属于哪一类？", options:["统计函数","其他函数","数学与三角函�?,"文本函数"], answer:0, explanation:"AVERAGE 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?AVERAGE 函数的正确功能描述？", options:["返回参数算术平均�?,"计算基于给定样本的标准偏差。它与STDEV函数的区别是文本值和逻辑�?TRUE或FALSE)也将参与计算�?,"返回名义年利�?,"返回正态累积分�?], answer:0, explanation:"AVERAGE 函数的功能是：返回参数算术平均�? }
  ],
  "AVERAGEIF": [
    { type:"choice", question:"AVERAGEIF 函数属于哪一类？", options:["统计函数","数学与三角函�?,"文本函数","其他函数"], answer:0, explanation:"AVERAGEIF 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?AVERAGEIF 函数的正确功能描述？", options:["对满足给定条件的单元格计算算术平均�?,"从文本字符串中的指定位置起返回特定个数的字符","返回按指定倍数舍入后的数字","返回两个日期之间的全部工作日�?], answer:0, explanation:"AVERAGEIF 函数的功能是：对满足给定条件的单元格计算算术平均�? }
  ],
  "AVERAGEA": [
    { type:"choice", question:"AVERAGEA 函数属于哪一类？", options:["统计函数","文本函数","逻辑函数","外部函数"], answer:0, explanation:"AVERAGEA 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?AVERAGEA 函数的正确功能描述？", options:["计算参数所有数值的算数平均�?,"返回复数的整数幂","返回区域的转�?,"返回到期付息的有价证券的年收益率"], answer:0, explanation:"AVERAGEA 函数的功能是：计算参数所有数值的算数平均�? }
  ],
  "BAHTTEXT": [
    { type:"choice", question:"BAHTTEXT 函数属于哪一类？", options:["文本函数","数学与三角函�?,"财务函数","信息函数"], answer:0, explanation:"BAHTTEXT 属于 文本函数�? },
    { type:"choice", question:"以下哪个�?BAHTTEXT 函数的正确功能描述？", options:["将数值转换为泰语的货币显示形�?,"返回相关系统","将按小数表示的美元价格转换为按分数表�?,"返回使累积二项式分布大于等于临界值的最小�?], answer:0, explanation:"BAHTTEXT 函数的功能是：将数值转换为泰语的货币显示形�? }
  ],
  "BESSELI": [
    { type:"choice", question:"BESSELI 函数属于哪一类？", options:["工程函数","逻辑函数","数据库函�?,"信息函数"], answer:0, explanation:"BESSELI 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?BESSELI 函数的正确功能描述？", options:["返回�?种修正Bessel函数值Kn(x)","返回折价发行的面�?100 的有价证券的价格","返回参数组中空值的个数","返回独立性检验�?], answer:0, explanation:"BESSELI 函数的功能是：返回第1种修正Bessel函数值Kn(x)" }
  ],
  "BESSELJ": [
    { type:"choice", question:"BESSELJ 函数属于哪一类？", options:["工程函数","日期与时间函�?,"查找与引用函�?,"数据库函�?], answer:0, explanation:"BESSELJ 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?BESSELJ 函数的正确功能描述？", options:["返回�?种Bessel函数值Kn(x)","返回数据集的峰�?,"返回错误�?#N/A","从文本字符串中的指定位置起返回特定个数的字符"], answer:0, explanation:"BESSELJ 函数的功能是：返回第1种Bessel函数值Kn(x)" }
  ],
  "BESSELK": [
    { type:"choice", question:"BESSELK 函数属于哪一类？", options:["工程函数","数据库函�?,"日期与时间函�?,"其他函数"], answer:0, explanation:"BESSELK 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?BESSELK 函数的正确功能描述？", options:["返回�?种修正Bessel函数值Kn(x)","(向量形式)","计算组合数或二项系数","将字符串中的半角(单字�?英文字母更改为全�?双字�?字符"], answer:0, explanation:"BESSELK 函数的功能是：返回第2种修正Bessel函数值Kn(x)" }
  ],
  "BESSELY": [
    { type:"choice", question:"BESSELY 函数属于哪一类？", options:["工程函数","数学与三角函�?,"财务函数","外部函数"], answer:0, explanation:"BESSELY 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?BESSELY 函数的正确功能描述？", options:["返回�?种Bessel函数值Kn(x)","返回标准正态累积分�?,"将所有以参数形式给出的数字相�?,"返回Poisson分布"], answer:0, explanation:"BESSELY 函数的功能是：返回第2种Bessel函数值Kn(x)" }
  ],
  "BETADIST": [
    { type:"choice", question:"BETADIST 函数属于哪一类？", options:["统计函数","信息函数","工程函数","财务函数"], answer:0, explanation:"BETADIST 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?BETADIST 函数的正确功能描述？", options:["返回Beta分布累积函数的函数�?,"返回参数的反双曲正弦�?,"返回两个复数的和","用回归直线进行预�?], answer:0, explanation:"BETADIST 函数的功能是：返回Beta分布累积函数的函数�? }
  ],
  "BETAINV": [
    { type:"choice", question:"BETAINV 函数属于哪一类？", options:["统计函数","逻辑函数","工程函数","查找与引用函�?], answer:0, explanation:"BETAINV 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?BETAINV 函数的正确功能描述？", options:["返回Beta分布累积函数的反函数�?,"返回Beta分布累积函数的函数�?,"返回线性回归线截距","如果值为 #N/A 错误值，则返�?TRUE"], answer:0, explanation:"BETAINV 函数的功能是：返回Beta分布累积函数的反函数�? }
  ],
  "BIN2DEC": [
    { type:"choice", question:"BIN2DEC 函数属于哪一类？", options:["工程函数","其他函数","统计函数","文本函数"], answer:0, explanation:"BIN2DEC 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?BIN2DEC 函数的正确功能描述？", options:["将二进制数转换为十进�?,"返回正负现金流在不同利率下支付的内部收益�?,"返回复数的以 2 为底数的对数","返回数字的自然对�?], answer:0, explanation:"BIN2DEC 函数的功能是：将二进制数转换为十进数" }
  ],
  "BIN2HEX": [
    { type:"choice", question:"BIN2HEX 函数属于哪一类？", options:["工程函数","统计函数","其他函数","数学与三角函�?], answer:0, explanation:"BIN2HEX 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?BIN2HEX 函数的正确功能描述？", options:["将二进制数转换为十六进数","返回两数组中对应数值之差的平方�?,"返回F概率分布","将八进制数转换为十进制数"], answer:0, explanation:"BIN2HEX 函数的功能是：将二进制数转换为十六进�? }
  ],
  "BIN2OCT": [
    { type:"choice", question:"BIN2OCT 函数属于哪一类？", options:["工程函数","数学与三角函�?,"信息函数","逻辑函数"], answer:0, explanation:"BIN2OCT 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?BIN2OCT 函数的正确功能描述？", options:["将二进制数转换为八进�?,"返回正态累积分�?,"返回参数的反双曲正弦�?,"返回Beta分布累积函数的函数�?], answer:0, explanation:"BIN2OCT 函数的功能是：将二进制数转换为八进数" }
  ],
  "BINOMDIST": [
    { type:"choice", question:"BINOMDIST 函数属于哪一类？", options:["统计函数","数学与三角函�?,"财务函数","文本函数"], answer:0, explanation:"BINOMDIST 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?BINOMDIST 函数的正确功能描述？", options:["返回一元二项式分布的概率�?,"返回数据集中值的百分比排�?,"返回数组的矩阵行列式","返回数字的自然对�?], answer:0, explanation:"BINOMDIST 函数的功能是：返回一元二项式分布的概率�? }
  ],
  "CALL": [
    { type:"choice", question:"CALL 函数属于哪一类？", options:["外部函数","数学与三角函�?,"财务函数","查找与引用函�?], answer:0, explanation:"CALL 属于 外部函数�? },
    { type:"choice", question:"以下哪个�?CALL 函数的正确功能描述？", options:["调用DLL中所含的过程","计算样本总体的方�?,"将参数沿绝对值减小的方向去尾舍入,使其等于最接近的倍数","返回Fisher变换"], answer:0, explanation:"CALL 函数的功能是：调用DLL中所含的过程" }
  ],
  "CEILNG": [
    { type:"choice", question:"CEILNG 函数属于哪一类？", options:["数学与三角函�?,"文本函数","外部函数","财务函数"], answer:0, explanation:"CEILNG 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?CEILNG 函数的正确功能描述？", options:["将参数Number沿绝对值增大的方向,舍入为最接通近的整数或基数","返回参数的反双曲余弦�?,"在数组第一列中查找，然后在行之间移动以返回单元格的�?,"返回Fisher变换"], answer:0, explanation:"CEILNG 函数的功能是：将参数Number沿绝对值增大的方向,舍入为最接通近的整数或基数" }
  ],
  "CELL": [
    { type:"choice", question:"CELL 函数属于哪一类？", options:["信息函数","逻辑函数","查找与引用函�?,"财务函数"], answer:0, explanation:"CELL 属于 信息函数�? },
    { type:"choice", question:"以下哪个�?CELL 函数的正确功能描述？", options:["返回单元格的信息","通过满足条件的行返回分散","返回参数的双曲余弦�?,"返回 2分布单尾概率的反函数"], answer:0, explanation:"CELL 函数的功能是：返回单元格的信�? }
  ],
  "CHAR": [
    { type:"choice", question:"CHAR 函数属于哪一类？", options:["文本函数","工程函数","统计函数","外部函数"], answer:0, explanation:"CHAR 属于 文本函数�? },
    { type:"choice", question:"以下哪个�?CHAR 函数的正确功能描述？", options:["返回对应于文字代码的字符","基于一系列定期的现金流和贴现率，返回一项投资的净现�?,"返回某一特定时间的小数�?,"将字符串中的半角(单字�?英文字母更改为全�?双字�?字符"], answer:0, explanation:"CHAR 函数的功能是：返回对应于文字代码的字�? }
  ],
  "CHIDIST": [
    { type:"choice", question:"CHIDIST 函数属于哪一类？", options:["统计函数","查找与引用函�?,"财务函数","其他函数"], answer:0, explanation:"CHIDIST 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?CHIDIST 函数的正确功能描述？", options:["返回 2分布的单尾概�?,"计算给定区域内满足特定条件的单元格的数目","返回反正态累积分�?,"将十六进制数转换为二进制�?], answer:0, explanation:"CHIDIST 函数的功能是：返�?2分布的单尾概�? }
  ],
  "CHINV": [
    { type:"choice", question:"CHINV 函数属于哪一类？", options:["统计函数","信息函数","逻辑函数","数据库函�?], answer:0, explanation:"CHINV 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?CHINV 函数的正确功能描述？", options:["返回 2分布单尾概率的反函数","通过满足条件的行返回标准偏差","返回Beta分布累积函数的反函数�?,"通过实部和虚部构成复�?], answer:0, explanation:"CHINV 函数的功能是：返�?2分布单尾概率的反函数" }
  ],
  "CHITEST": [
    { type:"choice", question:"CHITEST 函数属于哪一类？", options:["统计函数","查找与引用函�?,"财务函数","工程函数"], answer:0, explanation:"CHITEST 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?CHITEST 函数的正确功能描述？", options:["返回独立性检验�?,"调用DLL中所含的过程","根据条件筛选数组，返回匹配条件的所有行/列（动态数组函数）","返回指数趋势的参�?], answer:0, explanation:"CHITEST 函数的功能是：返回独立性检验�? }
  ],
  "CHOOSE": [
    { type:"choice", question:"CHOOSE 函数属于哪一类？", options:["查找与引用函�?,"外部函数","信息函数","逻辑函数"], answer:0, explanation:"CHOOSE 属于 查找与引用函数�? },
    { type:"choice", question:"以下哪个�?CHOOSE 函数的正确功能描述？", options:["从参数列表中选择�?,"返回数的乘幂结果","如果数字为奇数，则返�?TRUE","返回参数列表中的最小�?], answer:0, explanation:"CHOOSE 函数的功能是：从参数列表中选择�? }
  ],
  "CLEAN": [
    { type:"choice", question:"CLEAN 函数属于哪一类？", options:["文本函数","数学与三角函�?,"查找与引用函�?,"财务函数"], answer:0, explanation:"CLEAN 属于 文本函数�? },
    { type:"choice", question:"以下哪个�?CLEAN 函数的正确功能描述？", options:["删除文本中不能打印的字符","返回某一角度的正切�?,"如果值为文本，则返回 TRUE","返回参数的双曲余弦�?], answer:0, explanation:"CLEAN 函数的功能是：删除文本中不能打印的字�? }
  ],
  "CODE": [
    { type:"choice", question:"CODE 函数属于哪一类？", options:["文本函数","信息函数","查找与引用函�?,"统计函数"], answer:0, explanation:"CODE 属于 文本函数�? },
    { type:"choice", question:"以下哪个�?CODE 函数的正确功能描述？", options:["返回数字代码","返回两个复数的商","将参数Number沿绝对值增大的方向,舍入为最接通近的整数或基数","返回标准正态累积分�?], answer:0, explanation:"CODE 函数的功能是：返回数字代�? }
  ],
  "COLUMN": [
    { type:"choice", question:"COLUMN 函数属于哪一类？", options:["查找与引用函�?,"信息函数","财务函数","数据库函�?], answer:0, explanation:"COLUMN 属于 查找与引用函数�? },
    { type:"choice", question:"以下哪个�?COLUMN 函数的正确功能描述？", options:["返回列编�?,"将十六进制数转换为八进制�?,"返回任意实数的双曲正弦值�?,"返回面值100的国库券的价�?], answer:0, explanation:"COLUMN 函数的功能是：返回列编号" }
  ],
  "COLUMNS": [
    { type:"choice", question:"COLUMNS 函数属于哪一类？", options:["查找与引用函�?,"文本函数","数学与三角函�?,"统计函数"], answer:0, explanation:"COLUMNS 属于 查找与引用函数�? },
    { type:"choice", question:"以下哪个�?COLUMNS 函数的正确功能描述？", options:["返回列数","如果值为一个引用，则返�?TRUE","如果值不是文本，则返�?TRUE","按指定位数四舍五入某个数字�?], answer:0, explanation:"COLUMNS 函数的功能是：返回列�? }
  ],
  "COMBIN": [
    { type:"choice", question:"COMBIN 函数属于哪一类？", options:["数学与三角函�?,"逻辑函数","工程函数","外部函数"], answer:0, explanation:"COMBIN 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?COMBIN 函数的正确功能描述？", options:["计算组合数或二项系数","返回标准正态累积分�?,"返回最小公倍数","返回�?种Bessel函数值Kn(x)"], answer:0, explanation:"COMBIN 函数的功能是：计算组合数或二项系�? }
  ],
  "COMPLEX": [
    { type:"choice", question:"COMPLEX 函数属于哪一类？", options:["工程函数","统计函数","逻辑函数","外部函数"], answer:0, explanation:"COMPLEX 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?COMPLEX 函数的正确功能描述？", options:["通过实部和虚部构成复�?,"使用余额递减法，返回指定期间内或部分期间内的某项资产折旧�?,"返回投资的期�?,"返回一组不定期发生的现金流的净现�?], answer:0, explanation:"COMPLEX 函数的功能是：通过实部和虚部构成复�? }
  ],
  "CONCATENATE": [
    { type:"choice", question:"CONCATENATE 函数属于哪一类？", options:["文本函数","日期与时间函�?,"逻辑函数","外部函数"], answer:0, explanation:"CONCATENATE 属于 文本函数�? },
    { type:"choice", question:"以下哪个�?CONCATENATE 函数的正确功能描述？", options:["将若干文字串合并到一个文字串�?,"返回数据集的峰�?,"返回数字的反余弦�?,"返回投资在某一给定期间内的本金偿还�?], answer:0, explanation:"CONCATENATE 函数的功能是：将若干文字串合并到一个文字串�? }
  ],
  "CONFIDENCE": [
    { type:"choice", question:"CONFIDENCE 函数属于哪一类？", options:["统计函数","数学与三角函�?,"财务函数","数据库函�?], answer:0, explanation:"CONFIDENCE 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?CONFIDENCE 函数的正确功能描述？", options:["返回数据集的置信区间","返回误差函数在上下限之间的积�?,"返回参数的反双曲余弦�?,"将数值带上美元符号和千位分隔�?], answer:0, explanation:"CONFIDENCE 函数的功能是：返回数据集的置信区�? }
  ],
  "CONVERT": [
    { type:"choice", question:"CONVERT 函数属于哪一类？", options:["工程函数","信息函数","逻辑函数","外部函数"], answer:0, explanation:"CONVERT 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?CONVERT 函数的正确功能描述？", options:["将数字从一个度量系统转换到另一个度量系统中","返回满足条件的列的平�?,"返回F检验的结果","返回超几何分�?], answer:0, explanation:"CONVERT 函数的功能是：将数字从一个度量系统转换到另一个度量系统中" }
  ],
  "CORREL": [
    { type:"choice", question:"CORREL 函数属于哪一类？", options:["统计函数","数学与三角函�?,"日期与时间函�?,"逻辑函数"], answer:0, explanation:"CORREL 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?CORREL 函数的正确功能描述？", options:["返回相关系统","如果数字为奇数，则返�?TRUE","返回反正态累积分�?,"返回线性趋势的参数"], answer:0, explanation:"CORREL 函数的功能是：返回相关系�? }
  ],
  "COS": [
    { type:"choice", question:"COS 函数属于哪一类？", options:["数学与三角函�?,"逻辑函数","外部函数","信息函数"], answer:0, explanation:"COS 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?COS 函数的正确功能描述？", options:["返回给定角度的余弦�?,"返回成交日之前的上一付息日的日期","(2003/2000)从枢表中读取数据","计算给定区域内满足特定条件的单元格的数目"], answer:0, explanation:"COS 函数的功能是：返回给定角度的余弦�? }
  ],
  "COSH": [
    { type:"choice", question:"COSH 函数属于哪一类？", options:["数学与三角函�?,"数据库函�?,"信息函数","逻辑函数"], answer:0, explanation:"COSH 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?COSH 函数的正确功能描述？", options:["返回参数的双曲余弦�?,"将数字向上舍入为最接近的奇型整�?,"将十六进制数转换为十进制�?,"返回满足条件的列的合�?], answer:0, explanation:"COSH 函数的功能是：返回参数的双曲余弦�? }
  ],
  "COUNT": [
    { type:"choice", question:"COUNT 函数属于哪一类？", options:["统计函数","数据库函�?,"外部函数","数学与三角函�?], answer:0, explanation:"COUNT 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?COUNT 函数的正确功能描述？", options:["返回日期和数值的个数","按绝对值增大的方向舍入一个数字�?,"将十六进制数转换为十进制�?,"返回相关系统"], answer:0, explanation:"COUNT 函数的功能是：返回日期和数值的个数" }
  ],
  "COUNTA": [
    { type:"choice", question:"COUNTA 函数属于哪一类？", options:["统计函数","数学与三角函�?,"财务函数","日期与时间函�?], answer:0, explanation:"COUNTA 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?COUNTA 函数的正确功能描述？", options:["返回参数组中非空值的个数","返回首期付息日不固定的面�?100 的有价证券的价格","删除文本中不能打印的字符","将数字从一个度量系统转换到另一个度量系统中"], answer:0, explanation:"COUNTA 函数的功能是：返回参数组中非空值的个数" }
  ],
  "COUNTBLANK": [
    { type:"choice", question:"COUNTBLANK 函数属于哪一类？", options:["统计函数","日期与时间函�?,"逻辑函数","信息函数"], answer:0, explanation:"COUNTBLANK 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?COUNTBLANK 函数的正确功能描述？", options:["返回参数组中空值的个数","指定要执行的逻辑检�?,"根据所指定的字节数替换另一文本串中的部分文�?,"将字符串中的半角(单字�?英文字母更改为全�?双字�?字符"], answer:0, explanation:"COUNTBLANK 函数的功能是：返回参数组中空值的个数" }
  ],
  "COUNTIF": [
    { type:"choice", question:"COUNTIF 函数属于哪一类？", options:["统计函数","逻辑函数","数学与三角函�?,"财务函数"], answer:0, explanation:"COUNTIF 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?COUNTIF 函数的正确功能描述？", options:["计算给定区域内满足特定条件的单元格的数目","返回给定角度的余弦�?,"返回满足条件的列的积","将表示数字的文字串转换成数字"], answer:0, explanation:"COUNTIF 函数的功能是：计算给定区域内满足特定条件的单元格的数�? }
  ],
  "COUPDAYBS": [
    { type:"choice", question:"COUPDAYBS 函数属于哪一类？", options:["财务函数","逻辑函数","查找与引用函�?,"外部函数"], answer:0, explanation:"COUPDAYBS 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?COUPDAYBS 函数的正确功能描述？", options:["返回当前付息期内截止到成交日的天�?,"返回参数的绝对�?,"返回文本字符串中的字符个�?,"如果值为一个引用，则返�?TRUE"], answer:0, explanation:"COUPDAYBS 函数的功能是：返回当前付息期内截止到成交日的天数" }
  ],
  "COUPDAYS": [
    { type:"choice", question:"COUPDAYS 函数属于哪一类？", options:["财务函数","工程函数","查找与引用函�?,"逻辑函数"], answer:0, explanation:"COUPDAYS 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?COUPDAYS 函数的正确功能描述？", options:["返回成交日所在的付息期的天数","将二进制数转换为八进�?,"按指定位数四舍五入某个数字�?,"返回线性趋势的参数"], answer:0, explanation:"COUPDAYS 函数的功能是：返回成交日所在的付息期的天数" }
  ],
  "COUPDAYSNC": [
    { type:"choice", question:"COUPDAYSNC 函数属于哪一类？", options:["财务函数","信息函数","逻辑函数","查找与引用函�?], answer:0, explanation:"COUPDAYSNC 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?COUPDAYSNC 函数的正确功能描述？", options:["返回从成交日到下一付息日之间的天数","返回某一正数的算术平方根�?,"通过满足条件的行返回不偏标准偏差","返回参数的反双曲正切�?], answer:0, explanation:"COUPDAYSNC 函数的功能是：返回从成交日到下一付息日之间的天数" }
  ],
  "COUPNCD": [
    { type:"choice", question:"COUPNCD 函数属于哪一类？", options:["财务函数","查找与引用函�?,"其他函数","数据库函�?], answer:0, explanation:"COUPNCD 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?COUPNCD 函数的正确功能描述？", options:["返回成交日过后的下一付息日的日期","根据条件筛选数组，返回匹配条件的所有行/列（动态数组函数）","返回数字代码","返回引用或数组的行数"], answer:0, explanation:"COUPNCD 函数的功能是：返回成交日过后的下一付息日的日期" }
  ],
  "COUPNUM": [
    { type:"choice", question:"COUPNUM 函数属于哪一类？", options:["财务函数","文本函数","逻辑函数","外部函数"], answer:0, explanation:"COUPNUM 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?COUPNUM 函数的正确功能描述？", options:["返回成交日和到期日之间的利息应付次数","返回数组的逆矩�?,"返回某日期的星期�?,"返回从成交日到下一付息日之间的天数"], answer:0, explanation:"COUPNUM 函数的功能是：返回成交日和到期日之间的利息应付次�? }
  ],
  "COUPPCD": [
    { type:"choice", question:"COUPPCD 函数属于哪一类？", options:["财务函数","逻辑函数","外部函数","查找与引用函�?], answer:0, explanation:"COUPPCD 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?COUPPCD 函数的正确功能描述？", options:["返回成交日之前的上一付息日的日期","返回当前付息期内截止到成交日的天�?,"返回与学生氏-t检验相关的概率","返回任意实数的双曲正切�?], answer:0, explanation:"COUPPCD 函数的功能是：返回成交日之前的上一付息日的日期" }
  ],
  "COVAR": [
    { type:"choice", question:"COVAR 函数属于哪一类？", options:["统计函数","数据库函�?,"工程函数","数学与三角函�?], answer:0, explanation:"COVAR 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?COVAR 函数的正确功能描述？", options:["返回协方�?,"返回最小公倍数","返回引用或数组的行数","如果值为�?#N/A 以外的任何错误值，则返�?TRUE"], answer:0, explanation:"COVAR 函数的功能是：返回协方差" }
  ],
  "CRITBINOM": [
    { type:"choice", question:"CRITBINOM 函数属于哪一类？", options:["统计函数","日期与时间函�?,"数学与三角函�?,"其他函数"], answer:0, explanation:"CRITBINOM 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?CRITBINOM 函数的正确功能描述？", options:["返回使累积二项式分布大于等于临界值的最小�?,"按给定次数重复文�?,"返回一个正实数与π的乘积的平方根�?,"返回一个数值在一组数值中的排�?如果数据清单已经排过序了，则数值的排位就是它当前的位置)"], answer:0, explanation:"CRITBINOM 函数的功能是：返回使累积二项式分布大于等于临界值的最小�? }
  ],
  "CUMIPMT": [
    { type:"choice", question:"CUMIPMT 函数属于哪一类？", options:["财务函数","数学与三角函�?,"查找与引用函�?,"逻辑函数"], answer:0, explanation:"CUMIPMT 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?CUMIPMT 函数的正确功能描述？", options:["返回贷款在给定期间累计偿还和利息数额","返回数据集中值的百分比排�?,"通过行号和列号返回单元格引用","返回复数的自然对�?], answer:0, explanation:"CUMIPMT 函数的功能是：返回贷款在给定期间累计偿还和利息数�? }
  ],
  "CUMPRINC": [
    { type:"choice", question:"CUMPRINC 函数属于哪一类？", options:["财务函数","查找与引用函�?,"日期与时间函�?,"数学与三角函�?], answer:0, explanation:"CUMPRINC 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?CUMPRINC 函数的正确功能描述？", options:["返回贷款在给定期间累计偿还和本金数额","从支持COM自动化的程序中返回实时数据�?,"返回定期付息有价证券的修正期�?,"返回每个会计期间的折旧�?此函数是为法国会计系统提供的"], answer:0, explanation:"CUMPRINC 函数的功能是：返回贷款在给定期间累计偿还和本金数�? }
  ],
  "DATE": [
    { type:"choice", question:"DATE 函数属于哪一类？", options:["日期与时间函�?,"查找与引用函�?,"信息函数","财务函数"], answer:0, explanation:"DATE 属于 日期与时间函数�? },
    { type:"choice", question:"以下哪个�?DATE 函数的正确功能描述？", options:["通过年、月或日返回日期","返回面值100的国库券的价�?,"返回复数的自然对�?,"返回数字的反余弦�?], answer:0, explanation:"DATE 函数的功能是：通过年、月或日返回日期" }
  ],
  "DATEDIF": [
    { type:"choice", question:"DATEDIF 函数属于哪一类？", options:["日期与时间函�?,"数据库函�?,"信息函数","其他函数"], answer:0, explanation:"DATEDIF 属于 日期与时间函数�? },
    { type:"choice", question:"以下哪个�?DATEDIF 函数的正确功能描述？", options:["计算期间内的天数、月数或年数","返回F概率分布的反函数�?,"返回任意实数的双曲正切�?,"用固定余额递减法算计折旧费"], answer:0, explanation:"DATEDIF 函数的功能是：计算期间内的天数、月数或年数" }
  ],
  "DATEVALUE": [
    { type:"choice", question:"DATEVALUE 函数属于哪一类？", options:["日期与时间函�?,"查找与引用函�?,"工程函数","其他函数"], answer:0, explanation:"DATEVALUE 属于 日期与时间函数�? },
    { type:"choice", question:"以下哪个�?DATEVALUE 函数的正确功能描述？", options:["将以文字表示的日期转换成系列�?,"返回以mean为平均值，以standard-dev为标准偏差的分布的正态化数值�?,"返回一次性付息的有价证券到期收回的金额�?,"与外部数据源连接，从工作表运行查询，然后SQL.REQUEST将查询结果以数组的形式返回，而无需进行宏编程�?], answer:0, explanation:"DATEVALUE 函数的功能是：将以文字表示的日期转换成系列数" }
  ],
  "DAVERAGE": [
    { type:"choice", question:"DAVERAGE 函数属于哪一类？", options:["数据库函�?,"数学与三角函�?,"工程函数","财务函数"], answer:0, explanation:"DAVERAGE 属于 数据库函数�? },
    { type:"choice", question:"以下哪个�?DAVERAGE 函数的正确功能描述？", options:["返回满足条件的列的平�?,"返回列编�?,"返回 2分布的单尾概�?,"返回参数的绝对�?], answer:0, explanation:"DAVERAGE 函数的功能是：返回满足条件的列的平均" }
  ],
  "DAY": [
    { type:"choice", question:"DAY 函数属于哪一类？", options:["日期与时间函�?,"文本函数","数据库函�?,"统计函数"], answer:0, explanation:"DAY 属于 日期与时间函数�? },
    { type:"choice", question:"以下哪个�?DAY 函数的正确功能描述？", options:["从日期中返回\"日\"","查看错误种类","(2003/2000)从枢表中读取数据","返回整个样本总体的标准偏差。它反映了样本总体相对于平均�?mean)的离散程度�?], answer:0, explanation:"DAY 函数的功能是：从日期中返回\"日\"" }
  ],
  "DAYS360": [
    { type:"choice", question:"DAYS360 函数属于哪一类？", options:["日期与时间函�?,"工程函数","外部函数","其他函数"], answer:0, explanation:"DAYS360 属于 日期与时间函数�? },
    { type:"choice", question:"以下哪个�?DAYS360 函数的正确功能描述？", options:["按照一�?60天的算法,返回两日期间相差的天�?,"替换文本内的字符","返回任意实数的双曲正弦值�?,"按给定次数重复文�?], answer:0, explanation:"DAYS360 函数的功能是：按照一�?60天的算法,返回两日期间相差的天�? }
  ],
  "DB": [
    { type:"choice", question:"DB 函数属于哪一类？", options:["财务函数","统计函数","信息函数","日期与时间函�?], answer:0, explanation:"DB 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?DB 函数的正确功能描述？", options:["用固定余额递减法算计折旧费","返回线性趋势的参数","返回参数列表中的最小值，包括数字、文本和逻辑�?,"返回区域中的第k个百分位�?], answer:0, explanation:"DB 函数的功能是：用固定余额递减法算计折旧费" }
  ],
  "DCOUNT": [
    { type:"choice", question:"DCOUNT 函数属于哪一类？", options:["数据库函�?,"外部函数","日期与时间函�?,"数学与三角函�?], answer:0, explanation:"DCOUNT 属于 数据库函数�? },
    { type:"choice", question:"以下哪个�?DCOUNT 函数的正确功能描述？", options:["返回满足条件的数值的个数","返回列数","返回折价发行的有价证券的年收益率","返回实际年利�?], answer:0, explanation:"DCOUNT 函数的功能是：返回满足条件的数值的个数" }
  ],
  "DCOUNTA": [
    { type:"choice", question:"DCOUNTA 函数属于哪一类？", options:["数据库函�?,"统计函数","逻辑函数","数学与三角函�?], answer:0, explanation:"DCOUNTA 属于 数据库函数�? },
    { type:"choice", question:"以下哪个�?DCOUNTA 函数的正确功能描述？", options:["返回满足条件的非空单元格的个�?,"返回F概率分布","返回数据集的置信区间","返回每个会计期间的折旧�?该函数为法国会计系统提供"], answer:0, explanation:"DCOUNTA 函数的功能是：返回满足条件的非空单元格的个数" }
  ],
  "DDB": [
    { type:"choice", question:"DDB 函数属于哪一类？", options:["财务函数","数学与三角函�?,"信息函数","外部函数"], answer:0, explanation:"DDB 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?DDB 函数的正确功能描述？", options:["用双倍余额递减法计算折旧费","返回定期付息的面�?100 的有价证券的价格","返回反对数正态分�?,"如果值为一个引用，则返�?TRUE"], answer:0, explanation:"DDB 函数的功能是：用双倍余额递减法计算折旧费" }
  ],
  "DEC2BIN": [
    { type:"choice", question:"DEC2BIN 函数属于哪一类？", options:["工程函数","数学与三角函�?,"财务函数","查找与引用函�?], answer:0, explanation:"DEC2BIN 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?DEC2BIN 函数的正确功能描述？", options:["将十进制数转换为二进制数","计算基于给定样本的标准偏差。它与STDEV函数的区别是文本值和逻辑�?TRUE或FALSE)也将参与计算�?,"将二进制数转换为十进�?,"返回一次性付息证券的利率"], answer:0, explanation:"DEC2BIN 函数的功能是：将十进制数转换为二进制�? }
  ],
  "DEC2HEX": [
    { type:"choice", question:"DEC2HEX 函数属于哪一类？", options:["工程函数","日期与时间函�?,"数学与三角函�?,"其他函数"], answer:0, explanation:"DEC2HEX 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?DEC2HEX 函数的正确功能描述？", options:["将十进制数转换为十六进制�?,"返回复数的以 2 为底数的对数","返回实际年利�?,"用回归直线进行预�?], answer:0, explanation:"DEC2HEX 函数的功能是：将十进制数转换为十六进制数" }
  ],
  "DEC2OCT": [
    { type:"choice", question:"DEC2OCT 函数属于哪一类？", options:["工程函数","查找与引用函�?,"信息函数","日期与时间函�?], answer:0, explanation:"DEC2OCT 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?DEC2OCT 函数的正确功能描述？", options:["将十进制数转换为八进制数","将数字从一个度量系统转换到另一个度量系统中","返回文本值最右边的字�?,"如果值为�?#N/A 以外的任何错误值，则返�?TRUE"], answer:0, explanation:"DEC2OCT 函数的功能是：将十进制数转换为八进制�? }
  ],
  "DEGREES": [
    { type:"choice", question:"DEGREES 函数属于哪一类？", options:["数学与三角函�?,"信息函数","外部函数","逻辑函数"], answer:0, explanation:"DEGREES 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?DEGREES 函数的正确功能描述？", options:["将弧度转换为�?,"返回年金的定期付款额","返回满足条件的非空单元格的个�?,"返回一次性付息的有价证券到期收回的金额�?], answer:0, explanation:"DEGREES 函数的功能是：将弧度转换为度" }
  ],
  "DELTA": [
    { type:"choice", question:"DELTA 函数属于哪一类？", options:["工程函数","外部函数","文本函数","其他函数"], answer:0, explanation:"DELTA 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?DELTA 函数的正确功能描述？", options:["测试两个数值是否相�?,"如果值为文本，则返回 TRUE","返回投资的现�?,"返回成交日之前的上一付息日的日期"], answer:0, explanation:"DELTA 函数的功能是：测试两个数值是否相�? }
  ],
  "DEVSQ": [
    { type:"choice", question:"DEVSQ 函数属于哪一类？", options:["统计函数","信息函数","外部函数","其他函数"], answer:0, explanation:"DEVSQ 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?DEVSQ 函数的正确功能描述？", options:["返回数据点与各自样本均值偏差的平方�?,"按照一�?60天的算法,返回两日期间相差的天�?,"返回文本值最右边的字�?,"计算在投资的特定期间内支付的利息"], answer:0, explanation:"DEVSQ 函数的功能是：返回数据点与各自样本均值偏差的平方�? }
  ],
  "DGET": [
    { type:"choice", question:"DGET 函数属于哪一类？", options:["数据库函�?,"统计函数","数学与三角函�?,"日期与时间函�?], answer:0, explanation:"DGET 属于 数据库函数�? },
    { type:"choice", question:"以下哪个�?DGET 函数的正确功能描述？", options:["寻找满足条件的行","返回误差函数在上下限之间的积�?,"返回参数 theta，一个以弧度表示的角�?,"返回两个复数的和"], answer:0, explanation:"DGET 函数的功能是：寻找满足条件的�? }
  ],
  "DISC": [
    { type:"choice", question:"DISC 函数属于哪一类？", options:["财务函数","查找与引用函�?,"其他函数","数学与三角函�?], answer:0, explanation:"DISC 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?DISC 函数的正确功能描述？", options:["返回有价证券的贴现率","通过年、月或日返回日期","返回平均偏差","返回参数的反双曲余弦�?], answer:0, explanation:"DISC 函数的功能是：返回有价证券的贴现�? }
  ],
  "DMAX": [
    { type:"choice", question:"DMAX 函数属于哪一类？", options:["数据库函�?,"信息函数","数学与三角函�?,"财务函数"], answer:0, explanation:"DMAX 属于 数据库函数�? },
    { type:"choice", question:"以下哪个�?DMAX 函数的正确功能描述？", options:["返回满足条件的最大�?,"测试两个数值是否相�?,"返回给定数字的中�?,"返回�?种修正Bessel函数值Kn(x)"], answer:0, explanation:"DMAX 函数的功能是：返回满足条件的最大�? }
  ],
  "DMIN": [
    { type:"choice", question:"DMIN 函数属于哪一类？", options:["数据库函�?,"逻辑函数","查找与引用函�?,"日期与时间函�?], answer:0, explanation:"DMIN 属于 数据库函数�? },
    { type:"choice", question:"以下哪个�?DMIN 函数的正确功能描述？", options:["返回满足条件的最小�?,"返回有关当前操作环境的信�?,"从日期中返回\"日\"","返回�?2 �?29 的复数的乘积"], answer:0, explanation:"DMIN 函数的功能是：返回满足条件的最小�? }
  ],
  "DOLLAR": [
    { type:"choice", question:"DOLLAR 函数属于哪一类？", options:["文本函数","逻辑函数","数学与三角函�?,"日期与时间函�?], answer:0, explanation:"DOLLAR 属于 文本函数�? },
    { type:"choice", question:"以下哪个�?DOLLAR 函数的正确功能描述？", options:["将数值带上美元符号和千位分隔�?,"返回一个数字，该数字代表一年中的第几周","返回某项资产在一个期间中的线性折旧�?,"返回参数列表中的最大值，包括数字、文本和逻辑�?], answer:0, explanation:"DOLLAR 函数的功能是：将数值带上美元符号和千位分隔�? }
  ],
  "DOLLARDE": [
    { type:"choice", question:"DOLLARDE 函数属于哪一类？", options:["财务函数","数学与三角函�?,"查找与引用函�?,"逻辑函数"], answer:0, explanation:"DOLLARDE 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?DOLLARDE 函数的正确功能描述？", options:["将按分数表示的美元价格转换为按小数表�?,"将序列号转换为分�?,"返回数组中的唯一值（去重），Office 365 动态数组函�?,"将十六进制数转换为八进制�?], answer:0, explanation:"DOLLARDE 函数的功能是：将按分数表示的美元价格转换为按小数表示" }
  ],
  "DOLLARFR": [
    { type:"choice", question:"DOLLARFR 函数属于哪一类？", options:["财务函数","数据库函�?,"统计函数","日期与时间函�?], answer:0, explanation:"DOLLARFR 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?DOLLARFR 函数的正确功能描述？", options:["将按小数表示的美元价格转换为按分数表�?,"根据所指定的字节数替换另一文本串中的部分文�?,"如果数字为偶数，则返�?TRUE","返回从成交日到下一付息日之间的天数"], answer:0, explanation:"DOLLARFR 函数的功能是：将按小数表示的美元价格转换为按分数表示" }
  ],
  "DPRODUCT": [
    { type:"choice", question:"DPRODUCT 函数属于哪一类？", options:["数据库函�?,"外部函数","工程函数","数学与三角函�?], answer:0, explanation:"DPRODUCT 属于 数据库函数�? },
    { type:"choice", question:"以下哪个�?DPRODUCT 函数的正确功能描述？", options:["返回满足条件的列的积","创建快捷方式或跳转，以打开存储在网络服务器、Intranet或Internet上的文档","返回末期付息日不固定的有价证券的收益�?,"返回实际年利�?], answer:0, explanation:"DPRODUCT 函数的功能是：返回满足条件的列的�? }
  ],
  "DSTDEV": [
    { type:"choice", question:"DSTDEV 函数属于哪一类？", options:["数据库函�?,"逻辑函数","外部函数","查找与引用函�?], answer:0, explanation:"DSTDEV 属于 数据库函数�? },
    { type:"choice", question:"以下哪个�?DSTDEV 函数的正确功能描述？", options:["通过满足条件的行返回不偏标准偏差","按绝对值减小的方向舍入某一数字�?,"返回复数的自然对�?,"将数字向上舍入为最接近的奇型整�?], answer:0, explanation:"DSTDEV 函数的功能是：通过满足条件的行返回不偏标准偏差" }
  ],
  "DSTDEVP": [
    { type:"choice", question:"DSTDEVP 函数属于哪一类？", options:["数据库函�?,"日期与时间函�?,"逻辑函数","外部函数"], answer:0, explanation:"DSTDEVP 属于 数据库函数�? },
    { type:"choice", question:"以下哪个�?DSTDEVP 函数的正确功能描述？", options:["通过满足条件的行返回标准偏差","返回F概率分布","返回数组的逆矩�?,"通过满足条件的行返回不偏标准偏差"], answer:0, explanation:"DSTDEVP 函数的功能是：通过满足条件的行返回标准偏差" }
  ],
  "DSUM": [
    { type:"choice", question:"DSUM 函数属于哪一类？", options:["数据库函�?,"外部函数","逻辑函数","查找与引用函�?], answer:0, explanation:"DSUM 属于 数据库函数�? },
    { type:"choice", question:"以下哪个�?DSUM 函数的正确功能描述？", options:["返回满足条件的列的合�?,"返回数月前或数月后的月末","返回超几何分�?,"返回复数的实系数"], answer:0, explanation:"DSUM 函数的功能是：返回满足条件的列的合计" }
  ],
  "DURATION": [
    { type:"choice", question:"DURATION 函数属于哪一类？", options:["财务函数","数据库函�?,"工程函数","逻辑函数"], answer:0, explanation:"DURATION 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?DURATION 函数的正确功能描述？", options:["返回定期付息有价证券的修正期�?,"返回反对数正态分�?,"将文本转换为小写形式","返回某一正数的算术平方根�?], answer:0, explanation:"DURATION 函数的功能是：返回定期付息有价证券的修正期限" }
  ],
  "DVAR": [
    { type:"choice", question:"DVAR 函数属于哪一类？", options:["数据库函�?,"文本函数","逻辑函数","工程函数"], answer:0, explanation:"DVAR 属于 数据库函数�? },
    { type:"choice", question:"以下哪个�?DVAR 函数的正确功能描述？", options:["通过满足条件的行返回不偏分散","返回Pi�?,"返回数据集的内部平均�?,"根据指定条件对若干单元格、区域或引用求和"], answer:0, explanation:"DVAR 函数的功能是：通过满足条件的行返回不偏分散" }
  ],
  "DVARP": [
    { type:"choice", question:"DVARP 函数属于哪一类？", options:["数据库函�?,"统计函数","文本函数","工程函数"], answer:0, explanation:"DVARP 属于 数据库函数�? },
    { type:"choice", question:"以下哪个�?DVARP 函数的正确功能描述？", options:["通过满足条件的行返回分散","返回参数的反正切�?,"计算指定范围的领域数","返回�?种修正Bessel函数值Kn(x)"], answer:0, explanation:"DVARP 函数的功能是：通过满足条件的行返回分散" }
  ],
  "EDATE": [
    { type:"choice", question:"EDATE 函数属于哪一类？", options:["日期与时间函�?,"外部函数","财务函数","文本函数"], answer:0, explanation:"EDATE 属于 日期与时间函数�? },
    { type:"choice", question:"以下哪个�?EDATE 函数的正确功能描述？", options:["返回数月前或数月后的日期","返回数组的逆矩�?,"返回定期付息有价证券的应计利�?,"将数值转换为泰语的货币显示形�?], answer:0, explanation:"EDATE 函数的功能是：返回数月前或数月后的日�? }
  ],
  "EFFECT": [
    { type:"choice", question:"EFFECT 函数属于哪一类？", options:["财务函数","信息函数","文本函数","数据库函�?], answer:0, explanation:"EFFECT 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?EFFECT 函数的正确功能描述？", options:["返回实际年利�?,"返回复数的共轭复�?,"通过满足条件的行返回标准偏差","返回数字的常用对�?], answer:0, explanation:"EFFECT 函数的功能是：返回实际年利率" }
  ],
  "EOMONTH": [
    { type:"choice", question:"EOMONTH 函数属于哪一类？", options:["日期与时间函�?,"逻辑函数","财务函数","其他函数"], answer:0, explanation:"EOMONTH 属于 日期与时间函数�? },
    { type:"choice", question:"以下哪个�?EOMONTH 函数的正确功能描述？", options:["返回数月前或数月后的月末","返回参数列表中的最小�?,"与外部数据源连接，从工作表运行查询，然后SQL.REQUEST将查询结果以数组的形式返回，而无需进行宏编程�?,"产生位于两个指定数值之间的一个随机数，每次重新计算工作表(按F9�?都将返回新的数值�?], answer:0, explanation:"EOMONTH 函数的功能是：返回数月前或数月后的月�? }
  ],
  "ERF": [
    { type:"choice", question:"ERF 函数属于哪一类？", options:["工程函数","数学与三角函�?,"财务函数","查找与引用函�?], answer:0, explanation:"ERF 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?ERF 函数的正确功能描述？", options:["返回误差函数在上下限之间的积�?,"返回某项资产按年限总和折旧法计算的指定期间的折旧�?,"将按小数表示的美元价格转换为按分数表�?,"返回协方�?], answer:0, explanation:"ERF 函数的功能是：返回误差函数在上下限之间的积分" }
  ],
  "ERFC": [
    { type:"choice", question:"ERFC 函数属于哪一类？", options:["工程函数","其他函数","信息函数","外部函数"], answer:0, explanation:"ERFC 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?ERFC 函数的正确功能描述？", options:["返回余误差函数的积分","在引用或数组中查找�?,"返回参数组中空值的个数","如果数字为奇数，则返�?TRUE"], answer:0, explanation:"ERFC 函数的功能是：返回余误差函数的积�? }
  ],
  "ERROR.TYPE": [
    { type:"choice", question:"ERROR.TYPE 函数属于哪一类？", options:["信息函数","财务函数","外部函数","数学与三角函�?], answer:0, explanation:"ERROR.TYPE 属于 信息函数�? },
    { type:"choice", question:"以下哪个�?ERROR.TYPE 函数的正确功能描述？", options:["查看错误种类","返回满足条件的最小�?,"返回参数的反正切�?,"返回定期付息的面�?100 的有价证券的价格"], answer:0, explanation:"ERROR.TYPE 函数的功能是：查看错误种�? }
  ],
  "EUROCONVERT": [
    { type:"choice", question:"EUROCONVERT 函数属于哪一类？", options:["外部函数","工程函数","数学与三角函�?,"日期与时间函�?], answer:0, explanation:"EUROCONVERT 属于 外部函数�? },
    { type:"choice", question:"以下哪个�?EUROCONVERT 函数的正确功能描述？", options:["欧盟货币的相互转�?,"(2003/2000)从枢表中读取数据","通过满足条件的行返回分散","将参数沿绝对值减小的方向去尾舍入,使其等于最接近的倍数"], answer:0, explanation:"EUROCONVERT 函数的功能是：欧盟货币的相互转换" }
  ],
  "EVEN": [
    { type:"choice", question:"EVEN 函数属于哪一类？", options:["数学与三角函�?,"财务函数","查找与引用函�?,"信息函数"], answer:0, explanation:"EVEN 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?EVEN 函数的正确功能描述？", options:["返回沿绝对值增大方向取整后最接近的偶�?,"调用DLL中所含的过程","返回参数的反正切�?,"返回数字的自然对�?], answer:0, explanation:"EVEN 函数的功能是：返回沿绝对值增大方向取整后最接近的偶�? }
  ],
  "EXACT": [
    { type:"choice", question:"EXACT 函数属于哪一类？", options:["文本函数","查找与引用函�?,"信息函数","工程函数"], answer:0, explanation:"EXACT 属于 文本函数�? },
    { type:"choice", question:"以下哪个�?EXACT 函数的正确功能描述？", options:["比较文本,查看是否相等","返回当前付息期内截止到成交日的天�?,"如果值不是文本，则返�?TRUE","将二进制数转换为十进�?], answer:0, explanation:"EXACT 函数的功能是：比较文�?查看是否相等" }
  ],
  "EXP": [
    { type:"choice", question:"EXP 函数属于哪一类？", options:["数学与三角函�?,"信息函数","工程函数","外部函数"], answer:0, explanation:"EXP 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?EXP 函数的正确功能描述？", options:["返回自然对数的底数e的幂预算","返回满足条件的列的合�?,"返回满足条件的列的平�?,"返回某日期的年份。其结果�?900�?999之间的一个整�?], answer:0, explanation:"EXP 函数的功能是：返回自然对数的底数e的幂预算" }
  ],
  "EXPONDIST": [
    { type:"choice", question:"EXPONDIST 函数属于哪一类？", options:["统计函数","文本函数","日期与时间函�?,"信息函数"], answer:0, explanation:"EXPONDIST 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?EXPONDIST 函数的正确功能描述？", options:["返回指数分布的�?,"返回数字代码","将数值转换为泰语的货币显示形�?,"返回Beta分布累积函数的反函数�?], answer:0, explanation:"EXPONDIST 函数的功能是：返回指数分布的�? }
  ],
  "FACT": [
    { type:"choice", question:"FACT 函数属于哪一类？", options:["数学与三角函�?,"信息函数","其他函数","查找与引用函�?], answer:0, explanation:"FACT 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?FACT 函数的正确功能描述？", options:["返回参数的阶�?,"返回某一角度的正切�?,"将十六进制数转换为八进制�?,"返回投资的期�?], answer:0, explanation:"FACT 函数的功能是：返回参数的阶乘" }
  ],
  "FACTDOUBLE": [
    { type:"choice", question:"FACTDOUBLE 函数属于哪一类？", options:["数学与三角函�?,"统计函数","日期与时间函�?,"其他函数"], answer:0, explanation:"FACTDOUBLE 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?FACTDOUBLE 函数的正确功能描述？", options:["返回参数的半阶乘","根据所指定的字节数替换另一文本串中的部分文�?,"返回参数组中空值的个数","如果数字为奇数，则返�?TRUE"], answer:0, explanation:"FACTDOUBLE 函数的功能是：返回参数的半阶�? }
  ],
  "FDIST": [
    { type:"choice", question:"FDIST 函数属于哪一类？", options:["统计函数","逻辑函数","文本函数","工程函数"], answer:0, explanation:"FDIST 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?FDIST 函数的正确功能描述？", options:["返回F概率分布","返回�?种Bessel函数值Kn(x)","返回给定数据点的Pearson乘积矩相关系数的平方�?,"返回一条线性回归拟合线的一组纵坐标�?y�?"], answer:0, explanation:"FDIST 函数的功能是：返回F概率分布" }
  ],
  "FIND": [
    { type:"choice", question:"FIND 函数属于哪一类？", options:["文本函数","统计函数","工程函数","信息函数"], answer:0, explanation:"FIND 属于 文本函数�? },
    { type:"choice", question:"以下哪个�?FIND 函数的正确功能描述？", options:["区分大小�?查看文本位置","除了单词之间的单个空格外，清除文本中的所有的空格","如果任一参数为TRUE，则返回TRUE","返回某一特定时间的小数�?], answer:0, explanation:"FIND 函数的功能是：区分大小写,查看文本位置" }
  ],
  "FINDB": [
    { type:"choice", question:"FINDB 函数属于哪一类？", options:["文本函数","工程函数","查找与引用函�?,"日期与时间函�?], answer:0, explanation:"FINDB 属于 文本函数�? },
    { type:"choice", question:"以下哪个�?FINDB 函数的正确功能描述？", options:["区分大小�?查看字节位置","对参数的逻辑值求�?,"如果数字为奇数，则返�?TRUE","返回当前付息期内截止到成交日的天�?], answer:0, explanation:"FINDB 函数的功能是：区分大小写,查看字节位置" }
  ],
  "FINV": [
    { type:"choice", question:"FINV 函数属于哪一类？", options:["统计函数","数学与三角函�?,"信息函数","财务函数"], answer:0, explanation:"FINV 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?FINV 函数的正确功能描述？", options:["返回F概率分布的反函数�?,"返回经过给定数据点的线性回归拟合线方程的斜�?它是直线上任意两点的垂直距离与水平距离的比值，也就是回归直线的变化�?","将数值转换为按指定数字格式表示的文本","返回与学生氏-t检验相关的概率"], answer:0, explanation:"FINV 函数的功能是：返回F概率分布的反函数�? }
  ],
  "FISHER": [
    { type:"choice", question:"FISHER 函数属于哪一类？", options:["统计函数","数学与三角函�?,"财务函数","查找与引用函�?], answer:0, explanation:"FISHER 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?FISHER 函数的正确功能描述？", options:["返回Fisher变换","返回参数组中空值的个数","返回一个正实数与π的乘积的平方根�?,"返回给定角度的余弦�?], answer:0, explanation:"FISHER 函数的功能是：返回Fisher变换" }
  ],
  "FISHERINV": [
    { type:"choice", question:"FISHERINV 函数属于哪一类？", options:["统计函数","逻辑函数","查找与引用函�?,"财务函数"], answer:0, explanation:"FISHERINV 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?FISHERINV 函数的正确功能描述？", options:["返回Fisher变换的反函数数�?,"返回平均偏差","返回某一特定时间的小数�?,"返回两数相除的余�?], answer:0, explanation:"FISHERINV 函数的功能是：返回Fisher变换的反函数数�? }
  ],
  "FIXED": [
    { type:"choice", question:"FIXED 函数属于哪一类？", options:["文本函数","逻辑函数","其他函数","财务函数"], answer:0, explanation:"FIXED 属于 文本函数�? },
    { type:"choice", question:"以下哪个�?FIXED 函数的正确功能描述？", options:["将数值带上千位分隔符和小数点标记","替换文本内的字符","返回数组的逆矩�?,"如果值为一个引用，则返�?TRUE"], answer:0, explanation:"FIXED 函数的功能是：将数值带上千位分隔符和小数点标记" }
  ],
  "FLOOR": [
    { type:"choice", question:"FLOOR 函数属于哪一类？", options:["数学与三角函�?,"信息函数","工程函数","数据库函�?], answer:0, explanation:"FLOOR 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?FLOOR 函数的正确功能描述？", options:["将参数沿绝对值减小的方向去尾舍入,使其等于最接近的倍数","将文本转换成大写形式","返回定期付息有价证券的收益率，函数YIELD用于计算债券收益�?,"返回满足条件的列的平�?], answer:0, explanation:"FLOOR 函数的功能是：将参数沿绝对值减小的方向去尾舍入,使其等于最接近的倍数" }
  ],
  "FORECAST": [
    { type:"choice", question:"FORECAST 函数属于哪一类？", options:["统计函数","数据库函�?,"数学与三角函�?,"财务函数"], answer:0, explanation:"FORECAST 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?FORECAST 函数的正确功能描述？", options:["用回归直线进行预�?,"欧盟货币的相互转�?,"返回列数","返回一元二项式分布的概率�?], answer:0, explanation:"FORECAST 函数的功能是：用回归直线进行预测" }
  ],
  "FREQUENCY": [
    { type:"choice", question:"FREQUENCY 函数属于哪一类？", options:["统计函数","数学与三角函�?,"信息函数","财务函数"], answer:0, explanation:"FREQUENCY 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?FREQUENCY 函数的正确功能描述？", options:["返回区间中所含值的个数(频度)","返回参数列表中的最大值，包括数字、文本和逻辑�?,"返回面值100的国库券的价�?,"返回首期付息日不固定的有价证券的收益�?], answer:0, explanation:"FREQUENCY 函数的功能是：返回区间中所含值的个数(频度)" }
  ],
  "FTEST": [
    { type:"choice", question:"FTEST 函数属于哪一类？", options:["统计函数","查找与引用函�?,"信息函数","财务函数"], answer:0, explanation:"FTEST 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?FTEST 函数的正确功能描述？", options:["返回F检验的结果","返回某项资产按年限总和折旧法计算的指定期间的折旧�?,"返回数据点与各自样本均值偏差的平方�?,"返回�?2 �?29 的复数的乘积"], answer:0, explanation:"FTEST 函数的功能是：返回F检验的结果" }
  ],
  "FV": [
    { type:"choice", question:"FV 函数属于哪一类？", options:["财务函数","数学与三角函�?,"查找与引用函�?,"工程函数"], answer:0, explanation:"FV 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?FV 函数的正确功能描述？", options:["返回将来价格","返回正态累积分�?,"通过实部和虚部构成复�?,"根据指定条件对若干单元格、区域或引用求和"], answer:0, explanation:"FV 函数的功能是：返回将来价�? }
  ],
  "FVSCHEDULE": [
    { type:"choice", question:"FVSCHEDULE 函数属于哪一类？", options:["财务函数","日期与时间函�?,"文本函数","数学与三角函�?], answer:0, explanation:"FVSCHEDULE 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?FVSCHEDULE 函数的正确功能描述？", options:["返回利率发生变动的存款的将来价格","返回定期付息有价证券的应计利�?,"返回超几何分�?,"返回复数的绝对值（�?"], answer:0, explanation:"FVSCHEDULE 函数的功能是：返回利率发生变动的存款的将来价�? }
  ],
  "GAMMADIST": [
    { type:"choice", question:"GAMMADIST 函数属于哪一类？", options:["统计函数","日期与时间函�?,"外部函数","数学与三角函�?], answer:0, explanation:"GAMMADIST 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?GAMMADIST 函数的正确功能描述？", options:["返回伽玛分布函数的�?,"返回一次性付息的有价证券到期收回的金额�?,"如果值为 #N/A 错误值，则返�?TRUE","返回F概率分布"], answer:0, explanation:"GAMMADIST 函数的功能是：返回伽玛分布函数的�? }
  ],
  "GAMMAINV": [
    { type:"choice", question:"GAMMAINV 函数属于哪一类？", options:["统计函数","查找与引用函�?,"工程函数","财务函数"], answer:0, explanation:"GAMMAINV 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?GAMMAINV 函数的正确功能描述？", options:["返回伽玛分布函数的反函数�?,"返回给定数目对象的排列数","返回参数列表中的最小�?,"返回满足条件的最小�?], answer:0, explanation:"GAMMAINV 函数的功能是：返回伽玛分布函数的反函数�? }
  ],
  "GAMMALN": [
    { type:"choice", question:"GAMMALN 函数属于哪一类？", options:["统计函数","逻辑函数","财务函数","数学与三角函�?], answer:0, explanation:"GAMMALN 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?GAMMALN 函数的正确功能描述？", options:["返回伽玛函数的自然对�?,"返回年金的各期利率。函数RATE通过迭代法计算得出，并且可能无解或有多个解�?,"返回两个复数的和","替换文本内的字符"], answer:0, explanation:"GAMMALN 函数的功能是：返回伽玛函数的自然对数" }
  ],
  "GCD": [
    { type:"choice", question:"GCD 函数属于哪一类？", options:["数学与三角函�?,"外部函数","文本函数","逻辑函数"], answer:0, explanation:"GCD 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?GCD 函数的正确功能描述？", options:["返回最大公约数","返回到期付息的有价证券的年收益率","返回末期付息日不固定的面�?100 的有价证券的价格","返回Poisson分布"], answer:0, explanation:"GCD 函数的功能是：返回最大公约数" }
  ],
  "GEOMEAN": [
    { type:"choice", question:"GEOMEAN 函数属于哪一类？", options:["统计函数","文本函数","信息函数","数学与三角函�?], answer:0, explanation:"GEOMEAN 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?GEOMEAN 函数的正确功能描述？", options:["返回相乘平均(几何平均�?","返回参数的反正切�?,"返回末期付息日不固定的面�?100 的有价证券的价格","返回用文本串表示的时间小数�?], answer:0, explanation:"GEOMEAN 函数的功能是：返回相乘平�?几何平均�?" }
  ],
  "GESTEP": [
    { type:"choice", question:"GESTEP 函数属于哪一类？", options:["工程函数","数学与三角函�?,"财务函数","查找与引用函�?], answer:0, explanation:"GESTEP 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?GESTEP 函数的正确功能描述？", options:["查看是否在基准值以�?,"对数组进行排序，Office 365 动态数组函�?,"返回给定数字的中�?,"将十进制数转换为八进制数"], answer:0, explanation:"GESTEP 函数的功能是：查看是否在基准值以�? }
  ],
  "GETPIVOTDATA": [
    { type:"choice", question:"GETPIVOTDATA 函数属于哪一类？", options:["查找与引用函�?,"数学与三角函�?,"文本函数","信息函数"], answer:0, explanation:"GETPIVOTDATA 属于 查找与引用函数�? },
    { type:"choice", question:"以下哪个�?GETPIVOTDATA 函数的正确功能描述？", options:["(2003/2000)从枢表中读取数据","返回复数的余�?,"返回文本值最右边的字�?,"将二进制数转换为十六进数"], answer:0, explanation:"GETPIVOTDATA 函数的功能是�?2003/2000)从枢表中读取数据" }
  ],
  "GROWTH": [
    { type:"choice", question:"GROWTH 函数属于哪一类？", options:["统计函数","财务函数","数学与三角函�?,"查找与引用函�?], answer:0, explanation:"GROWTH 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?GROWTH 函数的正确功能描述？", options:["用指数回归曲线进行预�?,"返回一元二项式分布的概率�?,"返回参数的绝对�?,"返回数值的类型"], answer:0, explanation:"GROWTH 函数的功能是：用指数回归曲线进行预测" }
  ],
  "HEX2BIN": [
    { type:"choice", question:"HEX2BIN 函数属于哪一类？", options:["工程函数","数学与三角函�?,"日期与时间函�?,"财务函数"], answer:0, explanation:"HEX2BIN 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?HEX2BIN 函数的正确功能描述？", options:["将十六进制数转换为二进制�?,"返回通过线性回归法计算y预测值时所产生的标准误�?,"将十进制数转换为十六进制�?,"返回单元格的信息"], answer:0, explanation:"HEX2BIN 函数的功能是：将十六进制数转换为二进制数" }
  ],
  "HEX2DEC": [
    { type:"choice", question:"HEX2DEC 函数属于哪一类？", options:["工程函数","逻辑函数","信息函数","查找与引用函�?], answer:0, explanation:"HEX2DEC 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?HEX2DEC 函数的正确功能描述？", options:["将十六进制数转换为十进制�?,"返回到期付息的面�?100 的有价证券的价格","返回给定数据点的Pearson乘积矩相关系数的平方�?,"返回给定引用的行号�?], answer:0, explanation:"HEX2DEC 函数的功能是：将十六进制数转换为十进制数" }
  ],
  "HEX2OCT": [
    { type:"choice", question:"HEX2OCT 函数属于哪一类？", options:["工程函数","信息函数","日期与时间函�?,"查找与引用函�?], answer:0, explanation:"HEX2OCT 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?HEX2OCT 函数的正确功能描述？", options:["将十六进制数转换为八进制�?,"计算期间内的天数、月数或年数","删除文本中不能打印的字符","返回每个会计期间的折旧�?该函数为法国会计系统提供"], answer:0, explanation:"HEX2OCT 函数的功能是：将十六进制数转换为八进制数" }
  ],
  "HLOOKUP": [
    { type:"choice", question:"HLOOKUP 函数属于哪一类？", options:["查找与引用函�?,"数学与三角函�?,"逻辑函数","文本函数"], answer:0, explanation:"HLOOKUP 属于 查找与引用函数�? },
    { type:"choice", question:"以下哪个�?HLOOKUP 函数的正确功能描述？", options:["在数组的首行查找并返回指定单元格的�?,"返回标准正态累积分�?,"如果值为文本，则返回 TRUE","返回折价发行的面�?100 的有价证券的价格"], answer:0, explanation:"HLOOKUP 函数的功能是：在数组的首行查找并返回指定单元格的�? }
  ],
  "HOUR": [
    { type:"choice", question:"HOUR 函数属于哪一类？", options:["日期与时间函�?,"数据库函�?,"数学与三角函�?,"逻辑函数"], answer:0, explanation:"HOUR 属于 日期与时间函数�? },
    { type:"choice", question:"以下哪个�?HOUR 函数的正确功能描述？", options:["将序列号转换为小�?,"返回参数组中非空值的个数","将数字向上舍入为最接近的奇型整�?,"跳转首行"], answer:0, explanation:"HOUR 函数的功能是：将序列号转换为小时" }
  ],
  "HYPERLINK": [
    { type:"choice", question:"HYPERLINK 函数属于哪一类？", options:["查找与引用函�?,"数学与三角函�?,"财务函数","逻辑函数"], answer:0, explanation:"HYPERLINK 属于 查找与引用函数�? },
    { type:"choice", question:"以下哪个�?HYPERLINK 函数的正确功能描述？", options:["创建快捷方式或跳转，以打开存储在网络服务器、Intranet或Internet上的文档","将数字向上舍入为最接近的奇型整�?,"从文本字符串中的指定位置起返回特定个数的字符","返回数据集中第k个最大�?], answer:0, explanation:"HYPERLINK 函数的功能是：创建快捷方式或跳转，以打开存储在网络服务器、Intranet或Internet上的文档" }
  ],
  "HYPGEOMDIST": [
    { type:"choice", question:"HYPGEOMDIST 函数属于哪一类？", options:["统计函数","信息函数","财务函数","逻辑函数"], answer:0, explanation:"HYPGEOMDIST 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?HYPGEOMDIST 函数的正确功能描述？", options:["返回超几何分�?,"返回通过线性回归法计算y预测值时所产生的标准误�?,"将八进制数转换为十六进制�?,"返回系统当前日期的序列号"], answer:0, explanation:"HYPGEOMDIST 函数的功能是：返回超几何分布" }
  ],
  "IF": [
    { type:"choice", question:"IF 函数属于哪一类？", options:["逻辑函数","数学与三角函�?,"外部函数","数据库函�?], answer:0, explanation:"IF 属于 逻辑函数�? },
    { type:"choice", question:"以下哪个�?IF 函数的正确功能描述？", options:["指定要执行的逻辑检�?,"计算在投资的特定期间内支付的利息","返回满足条件的最小�?,"返回两个复数的商"], answer:0, explanation:"IF 函数的功能是：指定要执行的逻辑检�? }
  ],
  "IMABS": [
    { type:"choice", question:"IMABS 函数属于哪一类？", options:["工程函数","统计函数","数学与三角函�?,"外部函数"], answer:0, explanation:"IMABS 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?IMABS 函数的正确功能描述？", options:["返回复数的绝对值（�?","将字符串中的全角英文字母转换为半角字�?,"使用余额递减法，返回指定期间内或部分期间内的某项资产折旧�?,"返回一次性付息的有价证券到期收回的金额�?], answer:0, explanation:"IMABS 函数的功能是：返回复数的绝对值（�?" }
  ],
  "IMAGINARY": [
    { type:"choice", question:"IMAGINARY 函数属于哪一类？", options:["工程函数","查找与引用函�?,"财务函数","日期与时间函�?], answer:0, explanation:"IMAGINARY 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?IMAGINARY 函数的正确功能描述？", options:["返回复数的虚系数","计算基于给定样本的标准偏差。它与STDEV函数的区别是文本值和逻辑�?TRUE或FALSE)也将参与计算�?,"将八进制数转换为十进制数","与外部数据源连接，从工作表运行查询，然后SQL.REQUEST将查询结果以数组的形式返回，而无需进行宏编程�?], answer:0, explanation:"IMAGINARY 函数的功能是：返回复数的虚系�? }
  ],
  "IMARGUMENT": [
    { type:"choice", question:"IMARGUMENT 函数属于哪一类？", options:["工程函数","查找与引用函�?,"数据库函�?,"统计函数"], answer:0, explanation:"IMARGUMENT 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?IMARGUMENT 函数的正确功能描述？", options:["返回参数 theta，一个以弧度表示的角�?,"返回每个会计期间的折旧�?此函数是为法国会计系统提供的","返回数据集的置信区间","返回数组的矩阵行列式"], answer:0, explanation:"IMARGUMENT 函数的功能是：返回参�?theta，一个以弧度表示的角�? }
  ],
  "IMCONJUGATE": [
    { type:"choice", question:"IMCONJUGATE 函数属于哪一类？", options:["工程函数","数学与三角函�?,"外部函数","其他函数"], answer:0, explanation:"IMCONJUGATE 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?IMCONJUGATE 函数的正确功能描述？", options:["返回复数的共轭复�?,"返回最小公倍数","返回指数分布的�?,"从支持COM自动化的程序中返回实时数据�?], answer:0, explanation:"IMCONJUGATE 函数的功能是：返回复数的共轭复数" }
  ],
  "IMCOS": [
    { type:"choice", question:"IMCOS 函数属于哪一类？", options:["工程函数","数学与三角函�?,"信息函数","外部函数"], answer:0, explanation:"IMCOS 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?IMCOS 函数的正确功能描述？", options:["返回复数的余�?,"返回参数的反双曲正切�?,"将参数Number沿绝对值增大的方向,舍入为最接通近的整数或基数","将序列号转换为分�?], answer:0, explanation:"IMCOS 函数的功能是：返回复数的余弦" }
  ],
  "IMDIV": [
    { type:"choice", question:"IMDIV 函数属于哪一类？", options:["工程函数","逻辑函数","数据库函�?,"统计函数"], answer:0, explanation:"IMDIV 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?IMDIV 函数的正确功能描述？", options:["返回两个复数的商","返回参数的反双曲正切�?,"将若干文字串合并到一个文字串�?,"返回给定数据点的Pearson乘积矩相关系数的平方�?], answer:0, explanation:"IMDIV 函数的功能是：返回两个复数的�? }
  ],
  "IMEXP": [
    { type:"choice", question:"IMEXP 函数属于哪一类？", options:["工程函数","逻辑函数","数学与三角函�?,"信息函数"], answer:0, explanation:"IMEXP 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?IMEXP 函数的正确功能描述？", options:["返回复数的指�?,"返回复数的实系数","将数字向上舍入为最接近的奇型整�?,"返回数据集中第k个最大�?], answer:0, explanation:"IMEXP 函数的功能是：返回复数的指数" }
  ],
  "IMLN": [
    { type:"choice", question:"IMLN 函数属于哪一类？", options:["工程函数","信息函数","其他函数","财务函数"], answer:0, explanation:"IMLN 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?IMLN 函数的正确功能描述？", options:["返回复数的自然对�?,"返回假设面值为 100 的有价证券的 Macauley 修正期限","返回当前日期和时间的序列�?,"将二进制数转换为八进�?], answer:0, explanation:"IMLN 函数的功能是：返回复数的自然对数" }
  ],
  "IMLOG10": [
    { type:"choice", question:"IMLOG10 函数属于哪一类？", options:["工程函数","财务函数","逻辑函数","其他函数"], answer:0, explanation:"IMLOG10 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?IMLOG10 函数的正确功能描述？", options:["返回复数的常用对�?,"返回满足条件的最小�?,"根据指定条件对若干单元格、区域或引用求和","返回参数的绝对�?], answer:0, explanation:"IMLOG10 函数的功能是：返回复数的常用对数" }
  ],
  "IMLOG2": [
    { type:"choice", question:"IMLOG2 函数属于哪一类？", options:["工程函数","信息函数","日期与时间函�?,"数据库函�?], answer:0, explanation:"IMLOG2 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?IMLOG2 函数的正确功能描述？", options:["返回复数的以 2 为底数的对数","将二进制数转换为十六进数","寻找满足条件的行","在数组第一列中查找，然后在行之间移动以返回单元格的�?], answer:0, explanation:"IMLOG2 函数的功能是：返回复数的�?2 为底数的对数" }
  ],
  "IMPOWER": [
    { type:"choice", question:"IMPOWER 函数属于哪一类？", options:["工程函数","信息函数","查找与引用函�?,"财务函数"], answer:0, explanation:"IMPOWER 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?IMPOWER 函数的正确功能描述？", options:["返回复数的整数幂","将字符串中的半角(单字�?英文字母更改为全�?双字�?字符","查看是否在基准值以�?,"返回给定的X及Y坐标值的反正切�?], answer:0, explanation:"IMPOWER 函数的功能是：返回复数的整数�? }
  ],
  "IMPRODUCT": [
    { type:"choice", question:"IMPRODUCT 函数属于哪一类？", options:["工程函数","数学与三角函�?,"财务函数","查找与引用函�?], answer:0, explanation:"IMPRODUCT 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?IMPRODUCT 函数的正确功能描述？", options:["返回�?2 �?29 的复数的乘积","返回与学生氏-t检验相关的概率","跳转首行","从文本字符串中的指定位置起返回特定个数的字符"], answer:0, explanation:"IMPRODUCT 函数的功能是：返回从 2 �?29 的复数的乘积" }
  ],
  "IMREAL": [
    { type:"choice", question:"IMREAL 函数属于哪一类？", options:["工程函数","信息函数","数学与三角函�?,"数据库函�?], answer:0, explanation:"IMREAL 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?IMREAL 函数的正确功能描述？", options:["返回复数的实系数","将十六进制数转换为十进制�?,"返回参数组中空值的个数","将二进制数转换为十六进数"], answer:0, explanation:"IMREAL 函数的功能是：返回复数的实系�? }
  ],
  "IMSIN": [
    { type:"choice", question:"IMSIN 函数属于哪一类？", options:["工程函数","财务函数","其他函数","数学与三角函�?], answer:0, explanation:"IMSIN 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?IMSIN 函数的正确功能描述？", options:["返回复数的正�?,"使用余额递减法，返回指定期间内或部分期间内的某项资产折旧�?,"返回满足条件的非空单元格的个�?,"返回参数的反双曲正弦�?], answer:0, explanation:"IMSIN 函数的功能是：返回复数的正弦" }
  ],
  "IMSQRT": [
    { type:"choice", question:"IMSQRT 函数属于哪一类？", options:["工程函数","外部函数","数据库函�?,"其他函数"], answer:0, explanation:"IMSQRT 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?IMSQRT 函数的正确功能描述？", options:["返回复数的平方根","将字符串中的半角(单字�?英文字母更改为全�?双字�?字符","(数组形式)","返回复数的常用对�?], answer:0, explanation:"IMSQRT 函数的功能是：返回复数的平方�? }
  ],
  "IMSUM": [
    { type:"choice", question:"IMSUM 函数属于哪一类？", options:["工程函数","其他函数","逻辑函数","数学与三角函�?], answer:0, explanation:"IMSUM 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?IMSUM 函数的正确功能描述？", options:["返回两个复数的和","返回一个正实数与π的乘积的平方根�?,"查看是否在基准值以�?,"返回F概率分布"], answer:0, explanation:"IMSUM 函数的功能是：返回两个复数的�? }
  ],
  "INDEX": [
    { type:"choice", question:"INDEX 函数属于哪一类？", options:["查找与引用函�?,"文本函数","外部函数","统计函数"], answer:0, explanation:"INDEX 属于 查找与引用函数�? },
    { type:"choice", question:"以下哪个�?INDEX 函数的正确功能描述？", options:["(数组形式)","通过实部和虚部构成复�?,"(2003/2000)从枢表中读取数据","返回当前付息期内截止到成交日的天�?], answer:0, explanation:"INDEX 函数的功能是�?数组形式)" }
  ],
  "INDIRECT": [
    { type:"choice", question:"INDIRECT 函数属于哪一类？", options:["查找与引用函�?,"逻辑函数","其他函数","统计函数"], answer:0, explanation:"INDIRECT 属于 查找与引用函数�? },
    { type:"choice", question:"以下哪个�?INDIRECT 函数的正确功能描述？", options:["返回由文本值表示的引用","按照一�?60天的算法,返回两日期间相差的天�?,"将数字从一个度量系统转换到另一个度量系统中","返回有价证券的贴现率"], answer:0, explanation:"INDIRECT 函数的功能是：返回由文本值表示的引用" }
  ],
  "INFO": [
    { type:"choice", question:"INFO 函数属于哪一类？", options:["信息函数","数学与三角函�?,"工程函数","财务函数"], answer:0, explanation:"INFO 属于 信息函数�? },
    { type:"choice", question:"以下哪个�?INFO 函数的正确功能描述？", options:["返回有关当前操作环境的信�?,"返回两数组的矩阵乘积","返回首期付息日不固定的有价证券的收益�?,"返回到期付息的面�?100 的有价证券的价格"], answer:0, explanation:"INFO 函数的功能是：返回有关当前操作环境的信息" }
  ],
  "INT": [
    { type:"choice", question:"INT 函数属于哪一类？", options:["数学与三角函�?,"工程函数","财务函数","查找与引用函�?], answer:0, explanation:"INT 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?INT 函数的正确功能描述？", options:["将数字向下舍入为最接近的整�?,"按绝对值减小的方向舍入某一数字�?,"返回一个分布的不对称度.它反映以平均值为中心的分布的不对称程�?正不对称度表示不对称边的分布更趋向正�?负不对称度表示不对称边的分布更趋向负�?,"将数字的小数部分截去，返回整�?], answer:0, explanation:"INT 函数的功能是：将数字向下舍入为最接近的整�? }
  ],
  "INTERCEPT": [
    { type:"choice", question:"INTERCEPT 函数属于哪一类？", options:["统计函数","数学与三角函�?,"财务函数","其他函数"], answer:0, explanation:"INTERCEPT 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?INTERCEPT 函数的正确功能描述？", options:["返回线性回归线截距","返回指数趋势的参�?,"返回折价发行的面�?100 的有价证券的价格","返回当前日期和时间的序列�?], answer:0, explanation:"INTERCEPT 函数的功能是：返回线性回归线截距" }
  ],
  "INTRATE": [
    { type:"choice", question:"INTRATE 函数属于哪一类？", options:["财务函数","信息函数","查找与引用函�?,"其他函数"], answer:0, explanation:"INTRATE 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?INTRATE 函数的正确功能描述？", options:["返回一次性付息证券的利率","返回复数的实系数","返回指数分布的�?,"比较文本,查看是否相等"], answer:0, explanation:"INTRATE 函数的功能是：返回一次性付息证券的利率" }
  ],
  "IPMT": [
    { type:"choice", question:"IPMT 函数属于哪一类？", options:["财务函数","文本函数","信息函数","外部函数"], answer:0, explanation:"IPMT 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?IPMT 函数的正确功能描述？", options:["返回给定期间内投资的利息偿还�?,"返回满足条件的最小�?,"返回末期付息日不固定的有价证券的收益�?,"返回参数的反正弦�?], answer:0, explanation:"IPMT 函数的功能是：返回给定期间内投资的利息偿还额" }
  ],
  "IRR": [
    { type:"choice", question:"IRR 函数属于哪一类？", options:["财务函数","日期与时间函�?,"其他函数","逻辑函数"], answer:0, explanation:"IRR 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?IRR 函数的正确功能描述？", options:["返回一系列现金流的内部收益�?,"将参数Number沿绝对值增大的方向,舍入为最接通近的整数或基数","返回通过线性回归法计算y预测值时所产生的标准误�?,"将八进制数转换为十六进制�?], answer:0, explanation:"IRR 函数的功能是：返回一系列现金流的内部收益�? }
  ],
  "ISBLANK": [
    { type:"choice", question:"ISBLANK 函数属于哪一类？", options:["信息函数","工程函数","财务函数","数学与三角函�?], answer:0, explanation:"ISBLANK 属于 信息函数�? },
    { type:"choice", question:"以下哪个�?ISBLANK 函数的正确功能描述？", options:["如果值为空，则返�?TRUE","返回复数的共轭复�?,"返回所有参数的平方�?,"将一个表示角度的数值或参数转换为弧度�?], answer:0, explanation:"ISBLANK 函数的功能是：如果值为空，则返�?TRUE" }
  ],
  "ISERR": [
    { type:"choice", question:"ISERR 函数属于哪一类？", options:["信息函数","外部函数","工程函数","查找与引用函�?], answer:0, explanation:"ISERR 属于 信息函数�? },
    { type:"choice", question:"以下哪个�?ISERR 函数的正确功能描述？", options:["如果值为�?#N/A 以外的任何错误值，则返�?TRUE","通过满足条件的行返回分散","按照一�?60天的算法,返回两日期间相差的天�?,"返回每个会计期间的折旧�?该函数为法国会计系统提供"], answer:0, explanation:"ISERR 函数的功能是：如果值为�?#N/A 以外的任何错误值，则返�?TRUE" }
  ],
  "ISERROR": [
    { type:"choice", question:"ISERROR 函数属于哪一类？", options:["信息函数","其他函数","逻辑函数","外部函数"], answer:0, explanation:"ISERROR 属于 信息函数�? },
    { type:"choice", question:"以下哪个�?ISERROR 函数的正确功能描述？", options:["如果值为任何错误值，则返�?TRUE","返回成交日过后的下一付息日的日期","返回�?种修正Bessel函数值Kn(x)","返回单元格的信息"], answer:0, explanation:"ISERROR 函数的功能是：如果值为任何错误值，则返�?TRUE" }
  ],
  "ISEVEN": [
    { type:"choice", question:"ISEVEN 函数属于哪一类？", options:["信息函数","查找与引用函�?,"财务函数","外部函数"], answer:0, explanation:"ISEVEN 属于 信息函数�? },
    { type:"choice", question:"以下哪个�?ISEVEN 函数的正确功能描述？", options:["如果数字为偶数，则返�?TRUE","返回参数列表中的最小�?,"将数字的小数部分截去，返回整�?,"返回满足条件的列的合�?], answer:0, explanation:"ISEVEN 函数的功能是：如果数字为偶数，则返回 TRUE" }
  ],
  "ISLOGICAL": [
    { type:"choice", question:"ISLOGICAL 函数属于哪一类？", options:["信息函数","外部函数","逻辑函数","查找与引用函�?], answer:0, explanation:"ISLOGICAL 属于 信息函数�? },
    { type:"choice", question:"以下哪个�?ISLOGICAL 函数的正确功能描述？", options:["如果值为逻辑值，则返�?TRUE","按绝对值减小的方向舍入某一数字�?,"返回Poisson分布","将参数沿绝对值减小的方向去尾舍入,使其等于最接近的倍数"], answer:0, explanation:"ISLOGICAL 函数的功能是：如果值为逻辑值，则返�?TRUE" }
  ],
  "ISNA": [
    { type:"choice", question:"ISNA 函数属于哪一类？", options:["信息函数","数学与三角函�?,"逻辑函数","数据库函�?], answer:0, explanation:"ISNA 属于 信息函数�? },
    { type:"choice", question:"以下哪个�?ISNA 函数的正确功能描述？", options:["如果值为 #N/A 错误值，则返�?TRUE","将十进制数转换为八进制数","返回�?种Bessel函数值Kn(x)","返回投资在某一给定期间内的本金偿还�?], answer:0, explanation:"ISNA 函数的功能是：如果值为 #N/A 错误值，则返�?TRUE" }
  ],
  "ISNONTEXT": [
    { type:"choice", question:"ISNONTEXT 函数属于哪一类？", options:["信息函数","数学与三角函�?,"统计函数","数据库函�?], answer:0, explanation:"ISNONTEXT 属于 信息函数�? },
    { type:"choice", question:"以下哪个�?ISNONTEXT 函数的正确功能描述？", options:["如果值不是文本，则返�?TRUE","返回满足条件的数值的个数","返回由文本值表示的引用","返回参数的反双曲正切�?], answer:0, explanation:"ISNONTEXT 函数的功能是：如果值不是文本，则返�?TRUE" }
  ],
  "ISNUMBER": [
    { type:"choice", question:"ISNUMBER 函数属于哪一类？", options:["信息函数","工程函数","逻辑函数","外部函数"], answer:0, explanation:"ISNUMBER 属于 信息函数�? },
    { type:"choice", question:"以下哪个�?ISNUMBER 函数的正确功能描述？", options:["如果值为数字，则返回 TRUE","将文本转换为小写形式","返回参数的阶�?,"返回参数的反双曲正弦�?], answer:0, explanation:"ISNUMBER 函数的功能是：如果值为数字，则返回 TRUE" }
  ],
  "ISODD": [
    { type:"choice", question:"ISODD 函数属于哪一类？", options:["信息函数","数据库函�?,"统计函数","文本函数"], answer:0, explanation:"ISODD 属于 信息函数�? },
    { type:"choice", question:"以下哪个�?ISODD 函数的正确功能描述？", options:["如果数字为奇数，则返�?TRUE","返回数月前或数月后的日期","将所有以参数形式给出的数字相�?,"返回�?种修正Bessel函数值Kn(x)"], answer:0, explanation:"ISODD 函数的功能是：如果数字为奇数，则返回 TRUE" }
  ],
  "ISPMT": [
    { type:"choice", question:"ISPMT 函数属于哪一类？", options:["财务函数","其他函数","统计函数","查找与引用函�?], answer:0, explanation:"ISPMT 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?ISPMT 函数的正确功能描述？", options:["计算在投资的特定期间内支付的利息","将十六进制数转换为十进制�?,"将按分数表示的美元价格转换为按小数表�?,"返回数据集中第k个最小值，从而得到数据集中特定位置上的数值�?], answer:0, explanation:"ISPMT 函数的功能是：计算在投资的特定期间内支付的利�? }
  ],
  "ISREF": [
    { type:"choice", question:"ISREF 函数属于哪一类？", options:["信息函数","日期与时间函�?,"数据库函�?,"数学与三角函�?], answer:0, explanation:"ISREF 属于 信息函数�? },
    { type:"choice", question:"以下哪个�?ISREF 函数的正确功能描述？", options:["如果值为一个引用，则返�?TRUE","返回�?种Bessel函数值Kn(x)","返回投资在某一给定期间内的本金偿还�?,"将字符串中的全角英文字母转换为半角字�?], answer:0, explanation:"ISREF 函数的功能是：如果值为一个引用，则返�?TRUE" }
  ],
  "ISTEXT": [
    { type:"choice", question:"ISTEXT 函数属于哪一类？", options:["信息函数","数学与三角函�?,"数据库函�?,"工程函数"], answer:0, explanation:"ISTEXT 属于 信息函数�? },
    { type:"choice", question:"以下哪个�?ISTEXT 函数的正确功能描述？", options:["如果值为文本，则返回 TRUE","返回数据集中值的百分比排�?,"跳转首行","返回参数列表中的最大�?], answer:0, explanation:"ISTEXT 函数的功能是：如果值为文本，则返回 TRUE" }
  ],
  "JIS": [
    { type:"choice", question:"JIS 函数属于哪一类？", options:["文本函数","信息函数","逻辑函数","其他函数"], answer:0, explanation:"JIS 属于 文本函数�? },
    { type:"choice", question:"以下哪个�?JIS 函数的正确功能描述？", options:["将字符串中的半角(单字�?英文字母更改为全�?双字�?字符","返回定期付息有价证券的修正期�?,"计算在投资的特定期间内支付的利息","查看是否在基准值以�?], answer:0, explanation:"JIS 函数的功能是：将字符串中的半�?单字�?英文字母更改为全�?双字�?字符" }
  ],
  "KURT": [
    { type:"choice", question:"KURT 函数属于哪一类？", options:["统计函数","其他函数","财务函数","逻辑函数"], answer:0, explanation:"KURT 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?KURT 函数的正确功能描述？", options:["返回数据集的峰�?,"如果值为一个引用，则返�?TRUE","返回一次性付息证券的利率","返回投资的现�?], answer:0, explanation:"KURT 函数的功能是：返回数据集的峰�? }
  ],
  "LARGE": [
    { type:"choice", question:"LARGE 函数属于哪一类？", options:["统计函数","工程函数","逻辑函数","其他函数"], answer:0, explanation:"LARGE 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?LARGE 函数的正确功能描述？", options:["返回数据集中第k个最大�?,"返回由文本值表示的引用","返回指数趋势的参�?,"将二进制数转换为十进�?], answer:0, explanation:"LARGE 函数的功能是：返回数据集中第k个最大�? }
  ],
  "LCM": [
    { type:"choice", question:"LCM 函数属于哪一类？", options:["数学与三角函�?,"信息函数","财务函数","文本函数"], answer:0, explanation:"LCM 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?LCM 函数的正确功能描述？", options:["返回最小公倍数","R回一个大于等�?小于1的随机数，每次计算工作表(按F9�?将返回一个新的数值�?,"查看是否在基准值以�?,"返回参数的反双曲正切�?], answer:0, explanation:"LCM 函数的功能是：返回最小公倍数" }
  ],
  "LEFT": [
    { type:"choice", question:"LEFT 函数属于哪一类？", options:["文本函数","外部函数","日期与时间函�?,"信息函数"], answer:0, explanation:"LEFT 属于 文本函数�? },
    { type:"choice", question:"以下哪个�?LEFT 函数的正确功能描述？", options:["返回文本值最左边的字�?,"用来估算给定样本的方�?,"(2003/2000)从枢表中读取数据","将数值带上千位分隔符和小数点标记"], answer:0, explanation:"LEFT 函数的功能是：返回文本值最左边的字�? }
  ],
  "LEN": [
    { type:"choice", question:"LEN 函数属于哪一类？", options:["文本函数","工程函数","统计函数","逻辑函数"], answer:0, explanation:"LEN 属于 文本函数�? },
    { type:"choice", question:"以下哪个�?LEN 函数的正确功能描述？", options:["返回文本字符串中的字符个�?,"返回给定引用的行号�?,"返回�?种修正Bessel函数值Kn(x)","计算样本总体的方�?], answer:0, explanation:"LEN 函数的功能是：返回文本字符串中的字符个数" }
  ],
  "LINEST": [
    { type:"choice", question:"LINEST 函数属于哪一类？", options:["统计函数","日期与时间函�?,"财务函数","信息函数"], answer:0, explanation:"LINEST 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?LINEST 函数的正确功能描述？", options:["返回线性趋势的参数","将数字的小数部分截去，返回整�?,"对参数的逻辑值求�?,"返回幂级数的和�?], answer:0, explanation:"LINEST 函数的功能是：返回线性趋势的参数" }
  ],
  "LN": [
    { type:"choice", question:"LN 函数属于哪一类？", options:["数学与三角函�?,"工程函数","日期与时间函�?,"其他函数"], answer:0, explanation:"LN 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?LN 函数的正确功能描述？", options:["返回数字的自然对�?,"返回复数的共轭复�?,"返回相关系统","计算指定范围的领域数"], answer:0, explanation:"LN 函数的功能是：返回数字的自然对数" }
  ],
  "LOG": [
    { type:"choice", question:"LOG 函数属于哪一类？", options:["数学与三角函�?,"财务函数","文本函数","查找与引用函�?], answer:0, explanation:"LOG 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?LOG 函数的正确功能描述？", options:["返回数字的指定底数的对数","计算基于给定样本的标准偏差。它与STDEV函数的区别是文本值和逻辑�?TRUE或FALSE)也将参与计算�?,"将若干文字串合并到一个文字串�?,"返回一组不定期发生的现金流的内部收益率"], answer:0, explanation:"LOG 函数的功能是：返回数字的指定底数的对�? }
  ],
  "LOG10": [
    { type:"choice", question:"LOG10 函数属于哪一类？", options:["数学与三角函�?,"财务函数","文本函数","工程函数"], answer:0, explanation:"LOG10 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?LOG10 函数的正确功能描述？", options:["返回数字的常用对�?,"将数字从一个度量系统转换到另一个度量系统中","返回使累积二项式分布大于等于临界值的最小�?,"跳转首行"], answer:0, explanation:"LOG10 函数的功能是：返回数字的常用对数" }
  ],
  "LOGEST": [
    { type:"choice", question:"LOGEST 函数属于哪一类？", options:["统计函数","逻辑函数","查找与引用函�?,"工程函数"], answer:0, explanation:"LOGEST 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?LOGEST 函数的正确功能描述？", options:["返回指数趋势的参�?,"将十六进制数转换为十进制�?,"返回区域的转�?,"返回复数的整数幂"], answer:0, explanation:"LOGEST 函数的功能是：返回指数趋势的参数" }
  ],
  "LOGINV": [
    { type:"choice", question:"LOGINV 函数属于哪一类？", options:["统计函数","外部函数","逻辑函数","信息函数"], answer:0, explanation:"LOGINV 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?LOGINV 函数的正确功能描述？", options:["返回反对数正态分�?,"将所有以参数形式给出的数字相�?,"用固定余额递减法算计折旧费","将按分数表示的美元价格转换为按小数表�?], answer:0, explanation:"LOGINV 函数的功能是：返回反对数正态分�? }
  ],
  "LOGNORMDIST": [
    { type:"choice", question:"LOGNORMDIST 函数属于哪一类？", options:["统计函数","工程函数","查找与引用函�?,"数据库函�?], answer:0, explanation:"LOGNORMDIST 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?LOGNORMDIST 函数的正确功能描述？", options:["返回累积对数正态分布函�?,"通过满足条件的行返回不偏标准偏差","将按分数表示的美元价格转换为按小数表�?,"返回参数的阶�?], answer:0, explanation:"LOGNORMDIST 函数的功能是：返回累积对数正态分布函�? }
  ],
  "LOOKUP": [
    { type:"choice", question:"LOOKUP 函数属于哪一类？", options:["查找与引用函�?,"日期与时间函�?,"其他函数","外部函数"], answer:0, explanation:"LOOKUP 属于 查找与引用函数�? },
    { type:"choice", question:"以下哪个�?LOOKUP 函数的正确功能描述？", options:["(向量形式)","返回任意实数的双曲正弦值�?,"返回给定角度的余弦�?,"估算样本的标准偏差。它反映了数据相对于平均�?mean)的离散程度�?], answer:0, explanation:"LOOKUP 函数的功能是�?向量形式)" }
  ],
  "LOWER": [
    { type:"choice", question:"LOWER 函数属于哪一类？", options:["文本函数","数学与三角函�?,"财务函数","工程函数"], answer:0, explanation:"LOWER 属于 文本函数�? },
    { type:"choice", question:"以下哪个�?LOWER 函数的正确功能描述？", options:["将文本转换为小写形式","返回幂级数的和�?,"将字符串中的全角英文字母转换为半角字�?,"返回参数组中非空值的个数"], answer:0, explanation:"LOWER 函数的功能是：将文本转换为小写形�? }
  ],
  "MATCH": [
    { type:"choice", question:"MATCH 函数属于哪一类？", options:["查找与引用函�?,"逻辑函数","文本函数","数学与三角函�?], answer:0, explanation:"MATCH 属于 查找与引用函数�? },
    { type:"choice", question:"以下哪个�?MATCH 函数的正确功能描述？", options:["在引用或数组中查找�?,"将序列号转换为小�?,"返回定期付息的面�?100 的有价证券的价格","返回一次性付息的有价证券到期收回的金额�?], answer:0, explanation:"MATCH 函数的功能是：在引用或数组中查找�? }
  ],
  "MAX": [
    { type:"choice", question:"MAX 函数属于哪一类？", options:["统计函数","逻辑函数","日期与时间函�?,"外部函数"], answer:0, explanation:"MAX 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?MAX 函数的正确功能描述？", options:["返回参数列表中的最大�?,"计算给定区域内满足特定条件的单元格的数目","对参数的逻辑值求�?,"将数字向上舍入为最接近的奇型整�?], answer:0, explanation:"MAX 函数的功能是：返回参数列表中的最大�? }
  ],
  "MAXA": [
    { type:"choice", question:"MAXA 函数属于哪一类？", options:["统计函数","日期与时间函�?,"文本函数","逻辑函数"], answer:0, explanation:"MAXA 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?MAXA 函数的正确功能描述？", options:["返回参数列表中的最大值，包括数字、文本和逻辑�?,"返回复数的整数幂","如果任一参数为TRUE，则返回TRUE","返回末期付息日不固定的面�?100 的有价证券的价格"], answer:0, explanation:"MAXA 函数的功能是：返回参数列表中的最大值，包括数字、文本和逻辑�? }
  ],
  "MDETERM": [
    { type:"choice", question:"MDETERM 函数属于哪一类？", options:["数学与三角函�?,"财务函数","文本函数","查找与引用函�?], answer:0, explanation:"MDETERM 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?MDETERM 函数的正确功能描述？", options:["返回数组的矩阵行列式","将阿拉伯数字转换为文本形式的罗马数字�?,"返回参数组中空值的个数","返回给定角度的余弦�?], answer:0, explanation:"MDETERM 函数的功能是：返回数组的矩阵行列�? }
  ],
  "MDURATION": [
    { type:"choice", question:"MDURATION 函数属于哪一类？", options:["财务函数","信息函数","数学与三角函�?,"数据库函�?], answer:0, explanation:"MDURATION 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?MDURATION 函数的正确功能描述？", options:["返回假设面值为 100 的有价证券的 Macauley 修正期限","返回反正态累积分�?,"查看是否在基准值以�?,"返回折价发行的面�?100 的有价证券的价格"], answer:0, explanation:"MDURATION 函数的功能是：返回假设面值为 100 的有价证券的 Macauley 修正期限" }
  ],
  "MEDIAN": [
    { type:"choice", question:"MEDIAN 函数属于哪一类？", options:["统计函数","日期与时间函�?,"财务函数","其他函数"], answer:0, explanation:"MEDIAN 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?MEDIAN 函数的正确功能描述？", options:["返回给定数字的中�?,"返回两个复数的和","返回时间值的秒数(�?�?9之间的一个整�?�?,"将字符串中的全角英文字母转换为半角字�?], answer:0, explanation:"MEDIAN 函数的功能是：返回给定数字的中�? }
  ],
  "MID": [
    { type:"choice", question:"MID 函数属于哪一类？", options:["文本函数","工程函数","逻辑函数","外部函数"], answer:0, explanation:"MID 属于 文本函数�? },
    { type:"choice", question:"以下哪个�?MID 函数的正确功能描述？", options:["从文本字符串中的指定位置起返回特定个数的字符","在数组的首行查找并返回指定单元格的�?,"将字符串中的半角(单字�?英文字母更改为全�?双字�?字符","返回复数的虚系数"], answer:0, explanation:"MID 函数的功能是：从文本字符串中的指定位置起返回特定个数的字�? }
  ],
  "MIN": [
    { type:"choice", question:"MIN 函数属于哪一类？", options:["统计函数","数学与三角函�?,"外部函数","财务函数"], answer:0, explanation:"MIN 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?MIN 函数的正确功能描述？", options:["返回参数列表中的最小�?,"(向量形式)","返回�?2 �?29 的复数的乘积","返回贷款在给定期间累计偿还和本金数额"], answer:0, explanation:"MIN 函数的功能是：返回参数列表中的最小�? }
  ],
  "MINA": [
    { type:"choice", question:"MINA 函数属于哪一类？", options:["统计函数","外部函数","逻辑函数","其他函数"], answer:0, explanation:"MINA 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?MINA 函数的正确功能描述？", options:["返回参数列表中的最小值，包括数字、文本和逻辑�?,"返回数字代码","如果值为 #N/A 错误值，则返�?TRUE","按给定次数重复文�?], answer:0, explanation:"MINA 函数的功能是：返回参数列表中的最小值，包括数字、文本和逻辑�? }
  ],
  "MINUTE": [
    { type:"choice", question:"MINUTE 函数属于哪一类？", options:["日期与时间函�?,"逻辑函数","工程函数","外部函数"], answer:0, explanation:"MINUTE 属于 日期与时间函数�? },
    { type:"choice", question:"以下哪个�?MINUTE 函数的正确功能描述？", options:["将序列号转换为分�?,"根据条件筛选数组，返回匹配条件的所有行/列（动态数组函数）","通过满足条件的行返回标准偏差","指定要执行的逻辑检�?], answer:0, explanation:"MINUTE 函数的功能是：将序列号转换为分钟" }
  ],
  "MINVERSE": [
    { type:"choice", question:"MINVERSE 函数属于哪一类？", options:["数学与三角函�?,"文本函数","逻辑函数","查找与引用函�?], answer:0, explanation:"MINVERSE 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?MINVERSE 函数的正确功能描述？", options:["返回数组的逆矩�?,"将序列号转换为小�?,"按指定位数四舍五入某个数字�?,"产生位于两个指定数值之间的一个随机数，每次重新计算工作表(按F9�?都将返回新的数值�?], answer:0, explanation:"MINVERSE 函数的功能是：返回数组的逆矩�? }
  ],
  "MIRR": [
    { type:"choice", question:"MIRR 函数属于哪一类？", options:["财务函数","统计函数","数据库函�?,"其他函数"], answer:0, explanation:"MIRR 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?MIRR 函数的正确功能描述？", options:["返回正负现金流在不同利率下支付的内部收益�?,"返回正态累积分�?,"返回相关系统","查看是否满足所有条�?], answer:0, explanation:"MIRR 函数的功能是：返回正负现金流在不同利率下支付的内部收益率" }
  ],
  "MMULT": [
    { type:"choice", question:"MMULT 函数属于哪一类？", options:["数学与三角函�?,"工程函数","统计函数","文本函数"], answer:0, explanation:"MMULT 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?MMULT 函数的正确功能描述？", options:["返回两数组的矩阵乘积","返回一个正实数与π的乘积的平方根�?,"返回满足条件的列的积","根据所指定的字节数替换另一文本串中的部分文�?], answer:0, explanation:"MMULT 函数的功能是：返回两数组的矩阵乘�? }
  ],
  "MOD": [
    { type:"choice", question:"MOD 函数属于哪一类？", options:["数学与三角函�?,"逻辑函数","信息函数","日期与时间函�?], answer:0, explanation:"MOD 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?MOD 函数的正确功能描述？", options:["返回两数相除的余�?,"计算指定范围的领域数","通过行号和列号返回单元格引用","返回成交日过后的下一付息日的日期"], answer:0, explanation:"MOD 函数的功能是：返回两数相除的余数" }
  ],
  "MODE": [
    { type:"choice", question:"MODE 函数属于哪一类？", options:["统计函数","日期与时间函�?,"财务函数","数学与三角函�?], answer:0, explanation:"MODE 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?MODE 函数的正确功能描述？", options:["返回数据集中出现最多的�?,"在数组的首行查找并返回指定单元格的�?,"返回参数的绝对�?,"返回定期付息有价证券的应计利�?], answer:0, explanation:"MODE 函数的功能是：返回数据集中出现最多的�? }
  ],
  "MONTH": [
    { type:"choice", question:"MONTH 函数属于哪一类？", options:["日期与时间函�?,"统计函数","外部函数","查找与引用函�?], answer:0, explanation:"MONTH 属于 日期与时间函数�? },
    { type:"choice", question:"以下哪个�?MONTH 函数的正确功能描述？", options:["将序列号转换为月","返回相关系统","跳转首行","将参数沿绝对值减小的方向去尾舍入,使其等于最接近的倍数"], answer:0, explanation:"MONTH 函数的功能是：将序列号转换为�? }
  ],
  "MROUND": [
    { type:"choice", question:"MROUND 函数属于哪一类？", options:["数学与三角函�?,"文本函数","工程函数","信息函数"], answer:0, explanation:"MROUND 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?MROUND 函数的正确功能描述？", options:["返回按指定倍数舍入后的数字","替换文本内的字符","返回贷款在给定期间累计偿还和本金数额","返回复数的共轭复�?], answer:0, explanation:"MROUND 函数的功能是：返回按指定倍数舍入后的数字" }
  ],
  "MULTINOMIAL": [
    { type:"choice", question:"MULTINOMIAL 函数属于哪一类？", options:["数学与三角函�?,"查找与引用函�?,"逻辑函数","日期与时间函�?], answer:0, explanation:"MULTINOMIAL 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?MULTINOMIAL 函数的正确功能描述？", options:["返回一组数字的多项�?,"返回通过线性回归法计算y预测值时所产生的标准误�?,"返回数月前或数月后的日期","通过行号和列号返回单元格引用"], answer:0, explanation:"MULTINOMIAL 函数的功能是：返回一组数字的多项�? }
  ],
  "N�?: [
    { type:"choice", question:"N�?函数属于哪一类？", options:["其他函数","查找与引用函�?,"数据库函�?,"数学与三角函�?], answer:0, explanation:"N�?属于 其他函数�? },
    { type:"choice", question:"以下哪个�?N�?函数的正确功能描述？", options:["跳转首行","返回Fisher变换","使用余额递减法，返回指定期间内或部分期间内的某项资产折旧�?,"除了单词之间的单个空格外，清除文本中的所有的空格"], answer:0, explanation:"N�?函数的功能是：跳转首�? }
  ],
  "NA": [
    { type:"choice", question:"NA 函数属于哪一类？", options:["信息函数","日期与时间函�?,"逻辑函数","查找与引用函�?], answer:0, explanation:"NA 属于 信息函数�? },
    { type:"choice", question:"以下哪个�?NA 函数的正确功能描述？", options:["返回错误�?#N/A","返回某一正数的算术平方根�?,"返回参数的反正弦�?,"返回伽玛函数的自然对�?], answer:0, explanation:"NA 函数的功能是：返回错误�?#N/A" }
  ],
  "NEGBINOMDIST": [
    { type:"choice", question:"NEGBINOMDIST 函数属于哪一类？", options:["统计函数","逻辑函数","其他函数","信息函数"], answer:0, explanation:"NEGBINOMDIST 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?NEGBINOMDIST 函数的正确功能描述？", options:["返回负二项式分布","使用余额递减法，返回指定期间内或部分期间内的某项资产折旧�?,"将序列号转换为小�?,"如果值为空，则返�?TRUE"], answer:0, explanation:"NEGBINOMDIST 函数的功能是：返回负二项式分�? }
  ],
  "NETWORKDAYS": [
    { type:"choice", question:"NETWORKDAYS 函数属于哪一类？", options:["日期与时间函�?,"工程函数","其他函数","财务函数"], answer:0, explanation:"NETWORKDAYS 属于 日期与时间函数�? },
    { type:"choice", question:"以下哪个�?NETWORKDAYS 函数的正确功能描述？", options:["返回两个日期之间的全部工作日�?,"对数组进行排序，Office 365 动态数组函�?,"通过满足条件的行返回不偏标准偏差","返回满足条件的非空单元格的个�?], answer:0, explanation:"NETWORKDAYS 函数的功能是：返回两个日期之间的全部工作日数" }
  ],
  "NOMINAL": [
    { type:"choice", question:"NOMINAL 函数属于哪一类？", options:["财务函数","文本函数","其他函数","逻辑函数"], answer:0, explanation:"NOMINAL 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?NOMINAL 函数的正确功能描述？", options:["返回名义年利�?,"返回一个数字，该数字代表一年中的第几周","将按小数表示的美元价格转换为按分数表�?,"返回列数"], answer:0, explanation:"NOMINAL 函数的功能是：返回名义年利率" }
  ],
  "NORMDIST": [
    { type:"choice", question:"NORMDIST 函数属于哪一类？", options:["统计函数","财务函数","其他函数","数学与三角函�?], answer:0, explanation:"NORMDIST 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?NORMDIST 函数的正确功能描述？", options:["返回正态累积分�?,"返回一次性付息的有价证券到期收回的金额�?,"返回标准正态累积分�?,"返回每个会计期间的折旧�?此函数是为法国会计系统提供的"], answer:0, explanation:"NORMDIST 函数的功能是：返回正态累积分�? }
  ],
  "NORMINV": [
    { type:"choice", question:"NORMINV 函数属于哪一类？", options:["统计函数","数学与三角函�?,"财务函数","其他函数"], answer:0, explanation:"NORMINV 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?NORMINV 函数的正确功能描述？", options:["返回反正态累积分�?,"返回两个复数的商","跳转首行","将数值转换为泰语的货币显示形�?], answer:0, explanation:"NORMINV 函数的功能是：返回反正态累积分�? }
  ],
  "NORMSDIST": [
    { type:"choice", question:"NORMSDIST 函数属于哪一类？", options:["统计函数","外部函数","逻辑函数","查找与引用函�?], answer:0, explanation:"NORMSDIST 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?NORMSDIST 函数的正确功能描述？", options:["返回标准正态累积分�?,"将数值转换为按指定数字格式表示的文本","如果值为任何错误值，则返�?TRUE","返回满足条件的列的合�?], answer:0, explanation:"NORMSDIST 函数的功能是：返回标准正态累积分�? }
  ],
  "NOT": [
    { type:"choice", question:"NOT 函数属于哪一类？", options:["逻辑函数","其他函数","数学与三角函�?,"查找与引用函�?], answer:0, explanation:"NOT 属于 逻辑函数�? },
    { type:"choice", question:"以下哪个�?NOT 函数的正确功能描述？", options:["对参数的逻辑值求�?,"返回相乘平均(几何平均�?","返回区域的转�?,"返回数字的反余弦�?], answer:0, explanation:"NOT 函数的功能是：对参数的逻辑值求�? }
  ],
  "NOW": [
    { type:"choice", question:"NOW 函数属于哪一类？", options:["日期与时间函�?,"工程函数","外部函数","统计函数"], answer:0, explanation:"NOW 属于 日期与时间函数�? },
    { type:"choice", question:"以下哪个�?NOW 函数的正确功能描述？", options:["返回当前日期和时间的序列�?,"返回名义年利�?,"将以文字表示的日期转换成系列�?,"返回某一角度的正切�?], answer:0, explanation:"NOW 函数的功能是：返回当前日期和时间的序列号" }
  ],
  "NPER": [
    { type:"choice", question:"NPER 函数属于哪一类？", options:["财务函数","统计函数","其他函数","文本函数"], answer:0, explanation:"NPER 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?NPER 函数的正确功能描述？", options:["返回投资的期�?,"返回文本值最右边的字�?,"返回两数组中对应数值的平方差之�?,"返回Fisher变换的反函数数�?], answer:0, explanation:"NPER 函数的功能是：返回投资的期数" }
  ],
  "NPV": [
    { type:"choice", question:"NPV 函数属于哪一类？", options:["财务函数","统计函数","其他函数","信息函数"], answer:0, explanation:"NPV 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?NPV 函数的正确功能描述？", options:["基于一系列定期的现金流和贴现率，返回一项投资的净现�?,"返回成交日和到期日之间的利息应付次数","返回独立性检验�?,"返回伽玛分布函数的�?], answer:0, explanation:"NPV 函数的功能是：基于一系列定期的现金流和贴现率，返回一项投资的净现�? }
  ],
  "O�?: [
    { type:"choice", question:"O�?函数属于哪一类？", options:["其他函数","逻辑函数","数据库函�?,"工程函数"], answer:0, explanation:"O�?属于 其他函数�? },
    { type:"choice", question:"以下哪个�?O�?函数的正确功能描述？", options:["跳转首行","返回参数列表中的最小�?,"返回幂级数的和�?,"返回定期付息的面�?100 的有价证券的价格"], answer:0, explanation:"O�?函数的功能是：跳转首�? }
  ],
  "OCT2BIN": [
    { type:"choice", question:"OCT2BIN 函数属于哪一类？", options:["工程函数","查找与引用函�?,"财务函数","数据库函�?], answer:0, explanation:"OCT2BIN 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?OCT2BIN 函数的正确功能描述？", options:["将八进制数转换为二进制数","将数字的小数部分截去，返回整�?,"返回沿绝对值增大方向取整后最接近的偶�?,"返回线性回归线截距"], answer:0, explanation:"OCT2BIN 函数的功能是：将八进制数转换为二进制�? }
  ],
  "OCT2DEC": [
    { type:"choice", question:"OCT2DEC 函数属于哪一类？", options:["工程函数","外部函数","信息函数","逻辑函数"], answer:0, explanation:"OCT2DEC 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?OCT2DEC 函数的正确功能描述？", options:["将八进制数转换为十进制数","返回数组的矩阵行列式","返回任意实数的双曲正弦值�?,"返回国库券的等效收益�?], answer:0, explanation:"OCT2DEC 函数的功能是：将八进制数转换为十进制�? }
  ],
  "OCT2HEX": [
    { type:"choice", question:"OCT2HEX 函数属于哪一类？", options:["工程函数","数据库函�?,"逻辑函数","日期与时间函�?], answer:0, explanation:"OCT2HEX 属于 工程函数�? },
    { type:"choice", question:"以下哪个�?OCT2HEX 函数的正确功能描述？", options:["将八进制数转换为十六进制�?,"返回投资的期�?,"将序列号转换为小�?,"返回参数的反正切�?], answer:0, explanation:"OCT2HEX 函数的功能是：将八进制数转换为十六进制数" }
  ],
  "ODD": [
    { type:"choice", question:"ODD 函数属于哪一类？", options:["数学与三角函�?,"财务函数","信息函数","查找与引用函�?], answer:0, explanation:"ODD 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?ODD 函数的正确功能描述？", options:["将数字向上舍入为最接近的奇型整�?,"根据条件筛选数组，返回匹配条件的所有行/列（动态数组函数）","返回一组数字的多项�?,"将数字从一个度量系统转换到另一个度量系统中"], answer:0, explanation:"ODD 函数的功能是：将数字向上舍入为最接近的奇型整�? }
  ],
  "ODDFPRICE": [
    { type:"choice", question:"ODDFPRICE 函数属于哪一类？", options:["财务函数","文本函数","其他函数","逻辑函数"], answer:0, explanation:"ODDFPRICE 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?ODDFPRICE 函数的正确功能描述？", options:["返回首期付息日不固定的面�?100 的有价证券的价格","通过满足条件的行返回不偏标准偏差","指定要执行的逻辑检�?,"返回相关系统"], answer:0, explanation:"ODDFPRICE 函数的功能是：返回首期付息日不固定的面�?100 的有价证券的价格" }
  ],
  "ODDFYIELD": [
    { type:"choice", question:"ODDFYIELD 函数属于哪一类？", options:["财务函数","查找与引用函�?,"信息函数","数学与三角函�?], answer:0, explanation:"ODDFYIELD 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?ODDFYIELD 函数的正确功能描述？", options:["返回首期付息日不固定的有价证券的收益�?,"返回任意实数的双曲正弦值�?,"返回反正态累积分�?,"返回文本值最左边的字�?], answer:0, explanation:"ODDFYIELD 函数的功能是：返回首期付息日不固定的有价证券的收益率" }
  ],
  "ODDLPRICH": [
    { type:"choice", question:"ODDLPRICH 函数属于哪一类？", options:["其他函数","数学与三角函�?,"逻辑函数","文本函数"], answer:0, explanation:"ODDLPRICH 属于 其他函数�? },
    { type:"choice", question:"以下哪个�?ODDLPRICH 函数的正确功能描述？", options:["返回末期付息日不固定的面�?100 的有价证券的价格","返回区域中的值在上下限之间的概率","返回F概率分布","返回作为概率和自由度函数的学生氏t分布的t�?], answer:0, explanation:"ODDLPRICH 函数的功能是：返回末期付息日不固定的面�?100 的有价证券的价格" }
  ],
  "ODDLYIELD": [
    { type:"choice", question:"ODDLYIELD 函数属于哪一类？", options:["财务函数","数据库函�?,"日期与时间函�?,"文本函数"], answer:0, explanation:"ODDLYIELD 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?ODDLYIELD 函数的正确功能描述？", options:["返回末期付息日不固定的有价证券的收益�?,"返回参数的绝对�?,"返回定期付息有价证券的应计利�?,"返回对应于文字代码的字符"], answer:0, explanation:"ODDLYIELD 函数的功能是：返回末期付息日不固定的有价证券的收益率" }
  ],
  "OFFSET": [
    { type:"choice", question:"OFFSET 函数属于哪一类？", options:["查找与引用函�?,"统计函数","文本函数","信息函数"], answer:0, explanation:"OFFSET 属于 查找与引用函数�? },
    { type:"choice", question:"以下哪个�?OFFSET 函数的正确功能描述？", options:["从给定引用中返回引用偏移�?,"(2003/2000)从枢表中读取数据","返回数月前或数月后的月末","返回首期付息日不固定的面�?100 的有价证券的价格"], answer:0, explanation:"OFFSET 函数的功能是：从给定引用中返回引用偏移量" }
  ],
  "OR": [
    { type:"choice", question:"OR 函数属于哪一类？", options:["逻辑函数","工程函数","外部函数","日期与时间函�?], answer:0, explanation:"OR 属于 逻辑函数�? },
    { type:"choice", question:"以下哪个�?OR 函数的正确功能描述？", options:["如果任一参数为TRUE，则返回TRUE","返回复数的实系数","返回一个正实数与π的乘积的平方根�?,"返回每个会计期间的折旧�?该函数为法国会计系统提供"], answer:0, explanation:"OR 函数的功能是：如果任一参数为TRUE，则返回TRUE" }
  ],
  "P�?: [
    { type:"choice", question:"P�?函数属于哪一类？", options:["其他函数","统计函数","财务函数","逻辑函数"], answer:0, explanation:"P�?属于 其他函数�? },
    { type:"choice", question:"以下哪个�?P�?函数的正确功能描述？", options:["跳转首行","返回数据点与各自样本均值偏差的平方�?,"返回Beta分布累积函数的反函数�?,"将数字向上舍入为最接近的奇型整�?], answer:0, explanation:"P�?函数的功能是：跳转首�? }
  ],
  "PEARSON": [
    { type:"choice", question:"PEARSON 函数属于哪一类？", options:["统计函数","数据库函�?,"数学与三角函�?,"其他函数"], answer:0, explanation:"PEARSON 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?PEARSON 函数的正确功能描述？", options:["返回Pearson乘积矩相关系�?,"返回累积对数正态分布函�?,"将十六进制数转换为十进制�?,"返回参数列表中的最大值，包括数字、文本和逻辑�?], answer:0, explanation:"PEARSON 函数的功能是：返回Pearson乘积矩相关系�? }
  ],
  "PERCENTILE": [
    { type:"choice", question:"PERCENTILE 函数属于哪一类？", options:["统计函数","数据库函�?,"逻辑函数","数学与三角函�?], answer:0, explanation:"PERCENTILE 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?PERCENTILE 函数的正确功能描述？", options:["返回区域中的第k个百分位�?,"将八进制数转换为十进制数","返回对应于文字代码的字符","返回复数的实系数"], answer:0, explanation:"PERCENTILE 函数的功能是：返回区域中的第k个百分位�? }
  ],
  "PERCENTRANK": [
    { type:"choice", question:"PERCENTRANK 函数属于哪一类？", options:["统计函数","外部函数","信息函数","文本函数"], answer:0, explanation:"PERCENTRANK 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?PERCENTRANK 函数的正确功能描述？", options:["返回数据集中值的百分比排�?,"返回�?2 �?29 的复数的乘积","返回成交日和到期日之间的利息应付次数","返回每个会计期间的折旧�?该函数为法国会计系统提供"], answer:0, explanation:"PERCENTRANK 函数的功能是：返回数据集中值的百分比排�? }
  ],
  "PERMUT": [
    { type:"choice", question:"PERMUT 函数属于哪一类？", options:["统计函数","工程函数","逻辑函数","日期与时间函�?], answer:0, explanation:"PERMUT 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?PERMUT 函数的正确功能描述？", options:["返回给定数目对象的排列数","欧盟货币的相互转�?,"返回有关当前操作环境的信�?,"计算在投资的特定期间内支付的利息"], answer:0, explanation:"PERMUT 函数的功能是：返回给定数目对象的排列�? }
  ],
  "PI": [
    { type:"choice", question:"PI 函数属于哪一类？", options:["数学与三角函�?,"逻辑函数","工程函数","信息函数"], answer:0, explanation:"PI 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?PI 函数的正确功能描述？", options:["返回Pi�?,"返回两数组中对应数值的平方和的总和","返回一个正实数与π的乘积的平方根�?,"在数组的首行查找并返回指定单元格的�?], answer:0, explanation:"PI 函数的功能是：返回Pi�? }
  ],
  "PMT": [
    { type:"choice", question:"PMT 函数属于哪一类？", options:["财务函数","数据库函�?,"外部函数","文本函数"], answer:0, explanation:"PMT 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?PMT 函数的正确功能描述？", options:["返回年金的定期付款额","基于一系列定期的现金流和贴现率，返回一项投资的净现�?,"返回伽玛函数的自然对�?,"如果值为�?#N/A 以外的任何错误值，则返�?TRUE"], answer:0, explanation:"PMT 函数的功能是：返回年金的定期付款�? }
  ],
  "POISSON": [
    { type:"choice", question:"POISSON 函数属于哪一类？", options:["统计函数","数学与三角函�?,"财务函数","外部函数"], answer:0, explanation:"POISSON 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?POISSON 函数的正确功能描述？", options:["返回Poisson分布","查看是否在基准值以�?,"返回满足条件的最小�?,"在数组第一列中查找，然后在行之间移动以返回单元格的�?], answer:0, explanation:"POISSON 函数的功能是：返回Poisson分布" }
  ],
  "POWER": [
    { type:"choice", question:"POWER 函数属于哪一类？", options:["数学与三角函�?,"文本函数","财务函数","查找与引用函�?], answer:0, explanation:"POWER 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?POWER 函数的正确功能描述？", options:["返回数的乘幂结果","返回给定角度的余弦�?,"如果数字为奇数，则返�?TRUE","将文本转换为小写形式"], answer:0, explanation:"POWER 函数的功能是：返回数的乘幂结�? }
  ],
  "PPMT": [
    { type:"choice", question:"PPMT 函数属于哪一类？", options:["财务函数","数学与三角函�?,"文本函数","信息函数"], answer:0, explanation:"PPMT 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?PPMT 函数的正确功能描述？", options:["返回投资在某一给定期间内的本金偿还�?,"返回对应于文字代码的字符","用指数回归曲线进行预�?,"返回文本值最左边的字�?], answer:0, explanation:"PPMT 函数的功能是：返回投资在某一给定期间内的本金偿还�? }
  ],
  "PRICE": [
    { type:"choice", question:"PRICE 函数属于哪一类？", options:["财务函数","外部函数","文本函数","信息函数"], answer:0, explanation:"PRICE 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?PRICE 函数的正确功能描述？", options:["返回定期付息的面�?100 的有价证券的价格","如果值为�?#N/A 以外的任何错误值，则返�?TRUE","返回复数的整数幂","将数值带上美元符号和千位分隔�?], answer:0, explanation:"PRICE 函数的功能是：返回定期付息的面�?100 的有价证券的价格" }
  ],
  "PRICEDISC": [
    { type:"choice", question:"PRICEDISC 函数属于哪一类？", options:["财务函数","文本函数","工程函数","逻辑函数"], answer:0, explanation:"PRICEDISC 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?PRICEDISC 函数的正确功能描述？", options:["返回折价发行的面�?100 的有价证券的价格","返回文本字符串中的字符个�?,"返回数据集中第k个最小值，从而得到数据集中特定位置上的数值�?,"返回某日期的年份。其结果�?900�?999之间的一个整�?], answer:0, explanation:"PRICEDISC 函数的功能是：返回折价发行的面�?100 的有价证券的价格" }
  ],
  "PRICEMAT": [
    { type:"choice", question:"PRICEMAT 函数属于哪一类？", options:["财务函数","信息函数","文本函数","查找与引用函�?], answer:0, explanation:"PRICEMAT 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?PRICEMAT 函数的正确功能描述？", options:["返回到期付息的面�?100 的有价证券的价格","返回时间值的秒数(�?�?9之间的一个整�?�?,"返回面值100的国库券的价�?,"返回列数"], answer:0, explanation:"PRICEMAT 函数的功能是：返回到期付息的面�?100 的有价证券的价格" }
  ],
  "PROB": [
    { type:"choice", question:"PROB 函数属于哪一类？", options:["统计函数","工程函数","逻辑函数","数据库函�?], answer:0, explanation:"PROB 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?PROB 函数的正确功能描述？", options:["返回区域中的值在上下限之间的概率","返回超几何分�?,"返回贷款在给定期间累计偿还和利息数额","将二进制数转换为八进�?], answer:0, explanation:"PROB 函数的功能是：返回区域中的值在上下限之间的概率" }
  ],
  "PRODUCT": [
    { type:"choice", question:"PRODUCT 函数属于哪一类？", options:["数学与三角函�?,"信息函数","文本函数","逻辑函数"], answer:0, explanation:"PRODUCT 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?PRODUCT 函数的正确功能描述？", options:["将所有以参数形式给出的数字相�?,"跳转首行","返回参数的反双曲正弦�?,"返回某一角度的正切�?], answer:0, explanation:"PRODUCT 函数的功能是：将所有以参数形式给出的数字相�? }
  ],
  "PROPER": [
    { type:"choice", question:"PROPER 函数属于哪一类？", options:["文本函数","查找与引用函�?,"逻辑函数","财务函数"], answer:0, explanation:"PROPER 属于 文本函数�? },
    { type:"choice", question:"以下哪个�?PROPER 函数的正确功能描述？", options:["将文本值中每一个单词的首字母设置为大写","估算样本方差","返回�?种修正Bessel函数值Kn(x)","返回�?种Bessel函数值Kn(x)"], answer:0, explanation:"PROPER 函数的功能是：将文本值中每一个单词的首字母设置为大写" }
  ],
  "PV": [
    { type:"choice", question:"PV 函数属于哪一类？", options:["财务函数","其他函数","查找与引用函�?,"数学与三角函�?], answer:0, explanation:"PV 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?PV 函数的正确功能描述？", options:["返回投资的现�?,"指定要执行的逻辑检�?,"返回一条线性回归拟合线的一组纵坐标�?y�?","返回任意实数的双曲正弦值�?], answer:0, explanation:"PV 函数的功能是：返回投资的现�? }
  ],
  "QUARTILE": [
    { type:"choice", question:"QUARTILE 函数属于哪一类？", options:["统计函数","信息函数","数学与三角函�?,"查找与引用函�?], answer:0, explanation:"QUARTILE 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?QUARTILE 函数的正确功能描述？", options:["返回一组数据的四分位点","返回参数组中空值的个数","将字符串中的全角英文字母转换为半角字�?,"返回参数组中非空值的个数"], answer:0, explanation:"QUARTILE 函数的功能是：返回一组数据的四分位点" }
  ],
  "QUOTIENT": [
    { type:"choice", question:"QUOTIENT 函数属于哪一类？", options:["数学与三角函�?,"其他函数","财务函数","查找与引用函�?], answer:0, explanation:"QUOTIENT 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?QUOTIENT 函数的正确功能描述？", options:["返回商的整数部分，即舍去商的小数部分�?,"返回数组的矩阵行列式","返回当前日期和时间的序列�?,"返回名义年利�?], answer:0, explanation:"QUOTIENT 函数的功能是：返回商的整数部分，即舍去商的小数部分�? }
  ],
  "RADANS": [
    { type:"choice", question:"RADANS 函数属于哪一类？", options:["其他函数","查找与引用函�?,"工程函数","文本函数"], answer:0, explanation:"RADANS 属于 其他函数�? },
    { type:"choice", question:"以下哪个�?RADANS 函数的正确功能描述？", options:["将一个表示角度的数值或参数转换为弧度�?,"返回满足条件的数值的个数","将十进制数转换为八进制数","(数组形式)"], answer:0, explanation:"RADANS 函数的功能是：将一个表示角度的数值或参数转换为弧度�? }
  ],
  "RAND": [
    { type:"choice", question:"RAND 函数属于哪一类？", options:["数学与三角函�?,"文本函数","外部函数","其他函数"], answer:0, explanation:"RAND 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?RAND 函数的正确功能描述？", options:["R回一个大于等�?小于1的随机数，每次计算工作表(按F9�?将返回一个新的数值�?,"将文本值中每一个单词的首字母设置为大写","返回满足条件的最大�?,"用固定余额递减法算计折旧费"], answer:0, explanation:"RAND 函数的功能是：R回一个大于等�?小于1的随机数，每次计算工作表(按F9�?将返回一个新的数值�? }
  ],
  "RANDBETWEEN": [
    { type:"choice", question:"RANDBETWEEN 函数属于哪一类？", options:["数学与三角函�?,"文本函数","逻辑函数","统计函数"], answer:0, explanation:"RANDBETWEEN 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?RANDBETWEEN 函数的正确功能描述？", options:["产生位于两个指定数值之间的一个随机数，每次重新计算工作表(按F9�?都将返回新的数值�?,"返回参数的反双曲正切�?,"返回给定数目对象的排列数","计算样本总体的方�?], answer:0, explanation:"RANDBETWEEN 函数的功能是：产生位于两个指定数值之间的一个随机数，每次重新计算工作表(按F9�?都将返回新的数值�? }
  ],
  "RANK": [
    { type:"choice", question:"RANK 函数属于哪一类？", options:["数学与三角函�?,"信息函数","财务函数","其他函数"], answer:0, explanation:"RANK 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?RANK 函数的正确功能描述？", options:["返回一个数值在一组数值中的排�?如果数据清单已经排过序了，则数值的排位就是它当前的位置)","估算样本的标准偏差。它反映了数据相对于平均�?mean)的离散程度�?,"返回当前付息期内截止到成交日的天�?,"将数字从一个度量系统转换到另一个度量系统中"], answer:0, explanation:"RANK 函数的功能是：返回一个数值在一组数值中的排�?如果数据清单已经排过序了，则数值的排位就是它当前的位置)" }
  ],
  "RATE": [
    { type:"choice", question:"RATE 函数属于哪一类？", options:["财务函数","数学与三角函�?,"查找与引用函�?,"逻辑函数"], answer:0, explanation:"RATE 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?RATE 函数的正确功能描述？", options:["返回年金的各期利率。函数RATE通过迭代法计算得出，并且可能无解或有多个解�?,"删除文本中不能打印的字符","通过行号和列号返回单元格引用","返回定期付息有价证券的应计利�?], answer:0, explanation:"RATE 函数的功能是：返回年金的各期利率。函数RATE通过迭代法计算得出，并且可能无解或有多个解�? }
  ],
  "RECEIVED": [
    { type:"choice", question:"RECEIVED 函数属于哪一类？", options:["财务函数","数据库函�?,"查找与引用函�?,"数学与三角函�?], answer:0, explanation:"RECEIVED 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?RECEIVED 函数的正确功能描述？", options:["返回一次性付息的有价证券到期收回的金额�?,"估算样本的标准偏差。它反映了数据相对于平均�?mean)的离散程度�?,"返回参数的阶�?,"返回复数的整数幂"], answer:0, explanation:"RECEIVED 函数的功能是：返回一次性付息的有价证券到期收回的金额�? }
  ],
  "REPLACE": [
    { type:"choice", question:"REPLACE 函数属于哪一类？", options:["文本函数","数学与三角函�?,"财务函数","其他函数"], answer:0, explanation:"REPLACE 属于 文本函数�? },
    { type:"choice", question:"以下哪个�?REPLACE 函数的正确功能描述？", options:["替换文本内的字符","将一个表示角度的数值或参数转换为弧度�?,"测试两个数值是否相�?,"返回满足条件的最小�?], answer:0, explanation:"REPLACE 函数的功能是：替换文本内的字�? }
  ],
  "REPLACEB": [
    { type:"choice", question:"REPLACEB 函数属于哪一类？", options:["文本函数","信息函数","外部函数","数学与三角函�?], answer:0, explanation:"REPLACEB 属于 文本函数�? },
    { type:"choice", question:"以下哪个�?REPLACEB 函数的正确功能描述？", options:["根据所指定的字节数替换另一文本串中的部分文�?,"测试两个数值是否相�?,"将数字从一个度量系统转换到另一个度量系统中","返回名义年利�?], answer:0, explanation:"REPLACEB 函数的功能是：根据所指定的字节数替换另一文本串中的部分文�? }
  ],
  "REPT": [
    { type:"choice", question:"REPT 函数属于哪一类？", options:["文本函数","工程函数","信息函数","外部函数"], answer:0, explanation:"REPT 属于 文本函数�? },
    { type:"choice", question:"以下哪个�?REPT 函数的正确功能描述？", options:["按给定次数重复文�?,"返回复数的整数幂","返回�?种Bessel函数值Kn(x)","(2003/2000)从枢表中读取数据"], answer:0, explanation:"REPT 函数的功能是：按给定次数重复文本" }
  ],
  "RIGHT": [
    { type:"choice", question:"RIGHT 函数属于哪一类？", options:["文本函数","逻辑函数","数据库函�?,"信息函数"], answer:0, explanation:"RIGHT 属于 文本函数�? },
    { type:"choice", question:"以下哪个�?RIGHT 函数的正确功能描述？", options:["返回文本值最右边的字�?,"返回引用或数组的行数","通过满足条件的行返回标准偏差","返回最大公约数"], answer:0, explanation:"RIGHT 函数的功能是：返回文本值最右边的字�? }
  ],
  "ROMAN": [
    { type:"choice", question:"ROMAN 函数属于哪一类？", options:["数学与三角函�?,"逻辑函数","外部函数","查找与引用函�?], answer:0, explanation:"ROMAN 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?ROMAN 函数的正确功能描述？", options:["将阿拉伯数字转换为文本形式的罗马数字�?,"返回正负现金流在不同利率下支付的内部收益�?,"如果值为一个引用，则返�?TRUE","返回满足条件的列的平�?], answer:0, explanation:"ROMAN 函数的功能是：将阿拉伯数字转换为文本形式的罗马数字�? }
  ],
  "ROUND": [
    { type:"choice", question:"ROUND 函数属于哪一类？", options:["数学与三角函�?,"财务函数","数据库函�?,"工程函数"], answer:0, explanation:"ROUND 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?ROUND 函数的正确功能描述？", options:["按指定位数四舍五入某个数字�?,"将序列号转换为月","返回国库券的收益�?,"返回给定数字的中�?], answer:0, explanation:"ROUND 函数的功能是：按指定位数四舍五入某个数字�? }
  ],
  "ROUNDDOWN": [
    { type:"choice", question:"ROUNDDOWN 函数属于哪一类？", options:["数学与三角函�?,"财务函数","查找与引用函�?,"其他函数"], answer:0, explanation:"ROUNDDOWN 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?ROUNDDOWN 函数的正确功能描述？", options:["按绝对值减小的方向舍入某一数字�?,"返回Poisson分布","返回折价发行的面�?100 的有价证券的价格","返回数的乘幂结果"], answer:0, explanation:"ROUNDDOWN 函数的功能是：按绝对值减小的方向舍入某一数字�? }
  ],
  "ROUNDUP": [
    { type:"choice", question:"ROUNDUP 函数属于哪一类？", options:["数学与三角函�?,"查找与引用函�?,"信息函数","财务函数"], answer:0, explanation:"ROUNDUP 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?ROUNDUP 函数的正确功能描述？", options:["按绝对值增大的方向舍入一个数字�?,"返回复数的整数幂","返回每个会计期间的折旧�?该函数为法国会计系统提供","返回首期付息日不固定的面�?100 的有价证券的价格"], answer:0, explanation:"ROUNDUP 函数的功能是：按绝对值增大的方向舍入一个数字�? }
  ],
  "ROW": [
    { type:"choice", question:"ROW 函数属于哪一类？", options:["查找与引用函�?,"文本函数","数学与三角函�?,"数据库函�?], answer:0, explanation:"ROW 属于 查找与引用函数�? },
    { type:"choice", question:"以下哪个�?ROW 函数的正确功能描述？", options:["返回给定引用的行号�?,"(向量形式)","返回�?种修正Bessel函数值Kn(x)","如果值为 #N/A 错误值，则返�?TRUE"], answer:0, explanation:"ROW 函数的功能是：返回给定引用的行号�? }
  ],
  "ROWS": [
    { type:"choice", question:"ROWS 函数属于哪一类？", options:["查找与引用函�?,"日期与时间函�?,"数学与三角函�?,"逻辑函数"], answer:0, explanation:"ROWS 属于 查找与引用函数�? },
    { type:"choice", question:"以下哪个�?ROWS 函数的正确功能描述？", options:["返回引用或数组的行数","将按小数表示的美元价格转换为按分数表�?,"如果值为文本，则返回 TRUE","计算在投资的特定期间内支付的利息"], answer:0, explanation:"ROWS 函数的功能是：返回引用或数组的行�? }
  ],
  "RSQ": [
    { type:"choice", question:"RSQ 函数属于哪一类？", options:["统计函数","文本函数","其他函数","逻辑函数"], answer:0, explanation:"RSQ 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?RSQ 函数的正确功能描述？", options:["返回给定数据点的Pearson乘积矩相关系数的平方�?,"返回定期付息有价证券的应计利�?,"比较文本,查看是否相等","返回参数算术平均�?], answer:0, explanation:"RSQ 函数的功能是：返回给定数据点的Pearson乘积矩相关系数的平方�? }
  ],
  "RTD": [
    { type:"choice", question:"RTD 函数属于哪一类？", options:["查找与引用函�?,"数学与三角函�?,"文本函数","数据库函�?], answer:0, explanation:"RTD 属于 查找与引用函数�? },
    { type:"choice", question:"以下哪个�?RTD 函数的正确功能描述？", options:["从支持COM自动化的程序中返回实时数据�?,"返回复数的自然对�?,"替换文本内的字符","返回名义年利�?], answer:0, explanation:"RTD 函数的功能是：从支持COM自动化的程序中返回实时数据�? }
  ],
  "SEARCH": [
    { type:"choice", question:"SEARCH 函数属于哪一类？", options:["文本函数","外部函数","逻辑函数","数据库函�?], answer:0, explanation:"SEARCH 属于 文本函数�? },
    { type:"choice", question:"以下哪个�?SEARCH 函数的正确功能描述？", options:["返回从start_num开始首次找到特定字符或文本串的位置编号�?其中SEARCH以字符数为单位，SEARCHB以字节数为单位�?,"R回一个大于等�?小于1的随机数，每次计算工作表(按F9�?将返回一个新的数值�?,"返回�?种修正Bessel函数值Kn(x)","返回从成交日到下一付息日之间的天数"], answer:0, explanation:"SEARCH 函数的功能是：返回从start_num开始首次找到特定字符或文本串的位置编号�?其中SEARCH以字符数为单位，SEARCHB以字节数为单位�? }
  ],
  "SECOND": [
    { type:"choice", question:"SECOND 函数属于哪一类？", options:["日期与时间函�?,"外部函数","统计函数","逻辑函数"], answer:0, explanation:"SECOND 属于 日期与时间函数�? },
    { type:"choice", question:"以下哪个�?SECOND 函数的正确功能描述？", options:["返回时间值的秒数(�?�?9之间的一个整�?�?,"与外部数据源连接，从工作表运行查询，然后SQL.REQUEST将查询结果以数组的形式返回，而无需进行宏编程�?,"返回参数列表中的最小值，包括数字、文本和逻辑�?,"如果任一参数为TRUE，则返回TRUE"], answer:0, explanation:"SECOND 函数的功能是：返回时间值的秒数(�?�?9之间的一个整�?�? }
  ],
  "SERIESSUM": [
    { type:"choice", question:"SERIESSUM 函数属于哪一类？", options:["数学与三角函�?,"其他函数","财务函数","查找与引用函�?], answer:0, explanation:"SERIESSUM 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?SERIESSUM 函数的正确功能描述？", options:["返回幂级数的和�?,"从文本字符串中的指定位置起返回特定个数的字符","返回参数的反双曲正切�?,"返回Fisher变换的反函数数�?], answer:0, explanation:"SERIESSUM 函数的功能是：返回幂级数的和�? }
  ],
  "SIGN": [
    { type:"choice", question:"SIGN 函数属于哪一类？", options:["数学与三角函�?,"财务函数","查找与引用函�?,"工程函数"], answer:0, explanation:"SIGN 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?SIGN 函数的正确功能描述？", options:["返回数字的符号。正数返�?，零返回0，负数时返回-1�?,"返回日期和数值的个数","将八进制数转换为十进制数","用指数回归曲线进行预�?], answer:0, explanation:"SIGN 函数的功能是：返回数字的符号。正数返�?，零返回0，负数时返回-1�? }
  ],
  "SIN": [
    { type:"choice", question:"SIN 函数属于哪一类？", options:["数学与三角函�?,"外部函数","日期与时间函�?,"财务函数"], answer:0, explanation:"SIN 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?SIN 函数的正确功能描述？", options:["返回某一角度的正弦值�?,"返回数月前或数月后的月末","将字符串中的全角英文字母转换为半角字�?,"返回协方�?], answer:0, explanation:"SIN 函数的功能是：返回某一角度的正弦值�? }
  ],
  "SINH": [
    { type:"choice", question:"SINH 函数属于哪一类？", options:["数学与三角函�?,"财务函数","查找与引用函�?,"文本函数"], answer:0, explanation:"SINH 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?SINH 函数的正确功能描述？", options:["返回任意实数的双曲正弦值�?,"返回区域中的值在上下限之间的概率","R回一个大于等�?小于1的随机数，每次计算工作表(按F9�?将返回一个新的数值�?,"返回首期付息日不固定的有价证券的收益�?], answer:0, explanation:"SINH 函数的功能是：返回任意实数的双曲正弦值�? }
  ],
  "SKEW": [
    { type:"choice", question:"SKEW 函数属于哪一类？", options:["统计函数","外部函数","查找与引用函�?,"逻辑函数"], answer:0, explanation:"SKEW 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?SKEW 函数的正确功能描述？", options:["返回一个分布的不对称度.它反映以平均值为中心的分布的不对称程�?正不对称度表示不对称边的分布更趋向正�?负不对称度表示不对称边的分布更趋向负�?,"返回参数列表中的最小值，包括数字、文本和逻辑�?,"返回某一角度的正弦值�?,"返回负二项式分布"], answer:0, explanation:"SKEW 函数的功能是：返回一个分布的不对称度.它反映以平均值为中心的分布的不对称程�?正不对称度表示不对称边的分布更趋向正�?负不对称度表示不对称边的分布更趋向负�? }
  ],
  "SLN": [
    { type:"choice", question:"SLN 函数属于哪一类？", options:["财务函数","数学与三角函�?,"其他函数","外部函数"], answer:0, explanation:"SLN 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?SLN 函数的正确功能描述？", options:["返回某项资产在一个期间中的线性折旧�?,"将数值带上千位分隔符和小数点标记","返回复数的平方根","返回由文本值表示的引用"], answer:0, explanation:"SLN 函数的功能是：返回某项资产在一个期间中的线性折旧�? }
  ],
  "SLOPE": [
    { type:"choice", question:"SLOPE 函数属于哪一类？", options:["统计函数","数学与三角函�?,"财务函数","查找与引用函�?], answer:0, explanation:"SLOPE 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?SLOPE 函数的正确功能描述？", options:["返回经过给定数据点的线性回归拟合线方程的斜�?它是直线上任意两点的垂直距离与水平距离的比值，也就是回归直线的变化�?","返回每个会计期间的折旧�?该函数为法国会计系统提供","区分大小�?查看文本位置","返回两数组中对应数值之差的平方�?], answer:0, explanation:"SLOPE 函数的功能是：返回经过给定数据点的线性回归拟合线方程的斜�?它是直线上任意两点的垂直距离与水平距离的比值，也就是回归直线的变化�?" }
  ],
  "SMALL": [
    { type:"choice", question:"SMALL 函数属于哪一类？", options:["统计函数","工程函数","其他函数","文本函数"], answer:0, explanation:"SMALL 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?SMALL 函数的正确功能描述？", options:["返回数据集中第k个最小值，从而得到数据集中特定位置上的数值�?,"返回年金的各期利率。函数RATE通过迭代法计算得出，并且可能无解或有多个解�?,"返回指数趋势的参�?,"对参数的逻辑值求�?], answer:0, explanation:"SMALL 函数的功能是：返回数据集中第k个最小值，从而得到数据集中特定位置上的数值�? }
  ],
  "SQL.REQUEST": [
    { type:"choice", question:"SQL.REQUEST 函数属于哪一类？", options:["外部函数","信息函数","文本函数","逻辑函数"], answer:0, explanation:"SQL.REQUEST 属于 外部函数�? },
    { type:"choice", question:"以下哪个�?SQL.REQUEST 函数的正确功能描述？", options:["与外部数据源连接，从工作表运行查询，然后SQL.REQUEST将查询结果以数组的形式返回，而无需进行宏编程�?,"返回F概率分布的反函数�?,"返回由文本值表示的引用","返回反对数正态分�?], answer:0, explanation:"SQL.REQUEST 函数的功能是：与外部数据源连接，从工作表运行查询，然后SQL.REQUEST将查询结果以数组的形式返回，而无需进行宏编程�? }
  ],
  "SQRT": [
    { type:"choice", question:"SQRT 函数属于哪一类？", options:["数学与三角函�?,"数据库函�?,"逻辑函数","文本函数"], answer:0, explanation:"SQRT 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?SQRT 函数的正确功能描述？", options:["返回某一正数的算术平方根�?,"根据条件筛选数组，返回匹配条件的所有行/列（动态数组函数）","估算样本的标准偏差。它反映了数据相对于平均�?mean)的离散程度�?,"使用余额递减法，返回指定期间内或部分期间内的某项资产折旧�?], answer:0, explanation:"SQRT 函数的功能是：返回某一正数的算术平方根�? }
  ],
  "SQRTPI": [
    { type:"choice", question:"SQRTPI 函数属于哪一类？", options:["数学与三角函�?,"文本函数","信息函数","逻辑函数"], answer:0, explanation:"SQRTPI 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?SQRTPI 函数的正确功能描述？", options:["返回一个正实数与π的乘积的平方根�?,"用指数回归曲线进行预�?,"将参数沿绝对值减小的方向去尾舍入,使其等于最接近的倍数","返回列编�?], answer:0, explanation:"SQRTPI 函数的功能是：返回一个正实数与π的乘积的平方根�? }
  ],
  "STANDARDIZE": [
    { type:"choice", question:"STANDARDIZE 函数属于哪一类？", options:["统计函数","数学与三角函�?,"其他函数","逻辑函数"], answer:0, explanation:"STANDARDIZE 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?STANDARDIZE 函数的正确功能描述？", options:["返回以mean为平均值，以standard-dev为标准偏差的分布的正态化数值�?,"返回名义年利�?,"返回投资在某一给定期间内的本金偿还�?,"返回从成交日到下一付息日之间的天数"], answer:0, explanation:"STANDARDIZE 函数的功能是：返回以mean为平均值，以standard-dev为标准偏差的分布的正态化数值�? }
  ],
  "STDEV": [
    { type:"choice", question:"STDEV 函数属于哪一类？", options:["统计函数","文本函数","信息函数","日期与时间函�?], answer:0, explanation:"STDEV 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?STDEV 函数的正确功能描述？", options:["估算样本的标准偏差。它反映了数据相对于平均�?mean)的离散程度�?,"返回文本字符串中的字符个�?,"将按分数表示的美元价格转换为按小数表�?,"查看是否满足所有条�?], answer:0, explanation:"STDEV 函数的功能是：估算样本的标准偏差。它反映了数据相对于平均�?mean)的离散程度�? }
  ],
  "STDEVA": [
    { type:"choice", question:"STDEVA 函数属于哪一类？", options:["统计函数","外部函数","财务函数","逻辑函数"], answer:0, explanation:"STDEVA 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?STDEVA 函数的正确功能描述？", options:["计算基于给定样本的标准偏差。它与STDEV函数的区别是文本值和逻辑�?TRUE或FALSE)也将参与计算�?,"返回假设面值为 100 的有价证券的 Macauley 修正期限","返回两数组中对应数值的平方差之�?,"返回线性趋势的参数"], answer:0, explanation:"STDEVA 函数的功能是：计算基于给定样本的标准偏差。它与STDEV函数的区别是文本值和逻辑�?TRUE或FALSE)也将参与计算�? }
  ],
  "STDEVP": [
    { type:"choice", question:"STDEVP 函数属于哪一类？", options:["统计函数","数学与三角函�?,"信息函数","日期与时间函�?], answer:0, explanation:"STDEVP 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?STDEVP 函数的正确功能描述？", options:["返回整个样本总体的标准偏差。它反映了样本总体相对于平均�?mean)的离散程度�?,"对参数的逻辑值求�?,"将数值带上千位分隔符和小数点标记","通过行号和列号返回单元格引用"], answer:0, explanation:"STDEVP 函数的功能是：返回整个样本总体的标准偏差。它反映了样本总体相对于平均�?mean)的离散程度�? }
  ],
  "STDEVPA": [
    { type:"choice", question:"STDEVPA 函数属于哪一类？", options:["统计函数","数据库函�?,"财务函数","数学与三角函�?], answer:0, explanation:"STDEVPA 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?STDEVPA 函数的正确功能描述？", options:["计算样本总体的标准偏�?,"返回正态累积分�?,"返回贷款在给定期间累计偿还和利息数额","如果数字为奇数，则返�?TRUE"], answer:0, explanation:"STDEVPA 函数的功能是：计算样本总体的标准偏�? }
  ],
  "STEYX": [
    { type:"choice", question:"STEYX 函数属于哪一类？", options:["统计函数","数据库函�?,"其他函数","查找与引用函�?], answer:0, explanation:"STEYX 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?STEYX 函数的正确功能描述？", options:["返回通过线性回归法计算y预测值时所产生的标准误�?,"返回对应于文字代码的字符","返回标准正态累积分�?,"返回数月前或数月后的日期"], answer:0, explanation:"STEYX 函数的功能是：返回通过线性回归法计算y预测值时所产生的标准误�? }
  ],
  "SUBSTITUTE": [
    { type:"choice", question:"SUBSTITUTE 函数属于哪一类？", options:["文本函数","工程函数","统计函数","逻辑函数"], answer:0, explanation:"SUBSTITUTE 属于 文本函数�? },
    { type:"choice", question:"以下哪个�?SUBSTITUTE 函数的正确功能描述？", options:["在文字串中用new_text替代old_text","返回给定角度的余弦�?,"返回满足条件的列的平�?,"返回两数组中对应数值的平方差之�?], answer:0, explanation:"SUBSTITUTE 函数的功能是：在文字串中用new_text替代old_text" }
  ],
  "SUBTOTAL": [
    { type:"choice", question:"SUBTOTAL 函数属于哪一类？", options:["数学与三角函�?,"工程函数","文本函数","日期与时间函�?], answer:0, explanation:"SUBTOTAL 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?SUBTOTAL 函数的正确功能描述？", options:["返回数据清单或数据库中的分类汇�?,"将十六进制数转换为十进制�?,"将弧度转换为�?,"返回复数的绝对值（�?"], answer:0, explanation:"SUBTOTAL 函数的功能是：返回数据清单或数据库中的分类汇�? }
  ],
  "SUM": [
    { type:"choice", question:"SUM 函数属于哪一类？", options:["数学与三角函�?,"信息函数","查找与引用函�?,"逻辑函数"], answer:0, explanation:"SUM 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?SUM 函数的正确功能描述？", options:["对满足条件的单元格的数值求�?,"返回参数列表中的最小�?,"返回正态累积分�?,"返回指数趋势的参�?], answer:0, explanation:"SUM 函数的功能是：对满足条件的单元格的数值求�? }
  ],
  "SUMIF": [
    { type:"choice", question:"SUMIF 函数属于哪一类？", options:["数学与三角函�?,"数据库函�?,"日期与时间函�?,"财务函数"], answer:0, explanation:"SUMIF 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?SUMIF 函数的正确功能描述？", options:["根据指定条件对若干单元格、区域或引用求和","将十六进制数转换为十进制�?,"返回国库券的收益�?,"返回所有参数的平方�?], answer:0, explanation:"SUMIF 函数的功能是：根据指定条件对若干单元格、区域或引用求和" }
  ],
  "SUMPRODUCT": [
    { type:"choice", question:"SUMPRODUCT 函数属于哪一类？", options:["数学与三角函�?,"财务函数","查找与引用函�?,"逻辑函数"], answer:0, explanation:"SUMPRODUCT 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?SUMPRODUCT 函数的正确功能描述？", options:["在给定的几组数组中，将数组间对应的元素相乘，并返回乘积之�?,"将数字从一个度量系统转换到另一个度量系统中","计算样本总体的方�?,"从日期中返回\"日\""], answer:0, explanation:"SUMPRODUCT 函数的功能是：在给定的几组数组中，将数组间对应的元素相乘，并返回乘积之和" }
  ],
  "SUMSQ": [
    { type:"choice", question:"SUMSQ 函数属于哪一类？", options:["数学与三角函�?,"逻辑函数","数据库函�?,"财务函数"], answer:0, explanation:"SUMSQ 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?SUMSQ 函数的正确功能描述？", options:["返回所有参数的平方�?,"返回复数的平方根","返回某一特定时间的小数�?,"返回正负现金流在不同利率下支付的内部收益�?], answer:0, explanation:"SUMSQ 函数的功能是：返回所有参数的平方�? }
  ],
  "SUMX2MY2": [
    { type:"choice", question:"SUMX2MY2 函数属于哪一类？", options:["数学与三角函�?,"逻辑函数","查找与引用函�?,"日期与时间函�?], answer:0, explanation:"SUMX2MY2 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?SUMX2MY2 函数的正确功能描述？", options:["返回两数组中对应数值的平方差之�?,"返回一组数据的四分位点","通过行号和列号返回单元格引用","返回从成交日到下一付息日之间的天数"], answer:0, explanation:"SUMX2MY2 函数的功能是：返回两数组中对应数值的平方差之�? }
  ],
  "SUMX2PY2": [
    { type:"choice", question:"SUMX2PY2 函数属于哪一类？", options:["数学与三角函�?,"财务函数","文本函数","查找与引用函�?], answer:0, explanation:"SUMX2PY2 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?SUMX2PY2 函数的正确功能描述？", options:["返回两数组中对应数值的平方和的总和","测试两个数值是否相�?,"将二进制数转换为十六进数","返回某日期的星期�?], answer:0, explanation:"SUMX2PY2 函数的功能是：返回两数组中对应数值的平方和的总和" }
  ],
  "SUMXMY2": [
    { type:"choice", question:"SUMXMY2 函数属于哪一类？", options:["数学与三角函�?,"文本函数","其他函数","日期与时间函�?], answer:0, explanation:"SUMXMY2 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?SUMXMY2 函数的正确功能描述？", options:["返回两数组中对应数值之差的平方�?,"计算期间内的天数、月数或年数","在数组的首行查找并返回指定单元格的�?,"返回参数的反双曲正切�?], answer:0, explanation:"SUMXMY2 函数的功能是：返回两数组中对应数值之差的平方�? }
  ],
  "SYD": [
    { type:"choice", question:"SYD 函数属于哪一类？", options:["财务函数","文本函数","逻辑函数","数据库函�?], answer:0, explanation:"SYD 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?SYD 函数的正确功能描述？", options:["返回某项资产按年限总和折旧法计算的指定期间的折旧�?,"将参数沿绝对值减小的方向去尾舍入,使其等于最接近的倍数","返回数组中的唯一值（去重），Office 365 动态数组函�?,"跳转首行"], answer:0, explanation:"SYD 函数的功能是：返回某项资产按年限总和折旧法计算的指定期间的折旧�? }
  ],
  "TAN": [
    { type:"choice", question:"TAN 函数属于哪一类？", options:["数学与三角函�?,"财务函数","数据库函�?,"统计函数"], answer:0, explanation:"TAN 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?TAN 函数的正确功能描述？", options:["返回某一角度的正切�?,"返回名义年利�?,"返回有关当前操作环境的信�?,"从参数列表中选择�?], answer:0, explanation:"TAN 函数的功能是：返回某一角度的正切�? }
  ],
  "TANH": [
    { type:"choice", question:"TANH 函数属于哪一类？", options:["数学与三角函�?,"其他函数","逻辑函数","查找与引用函�?], answer:0, explanation:"TANH 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?TANH 函数的正确功能描述？", options:["返回任意实数的双曲正切�?,"如果数字为偶数，则返�?TRUE","在引用或数组中查找�?,"区分大小�?查看字节位置"], answer:0, explanation:"TANH 函数的功能是：返回任意实数的双曲正切�? }
  ],
  "TBILLEQ": [
    { type:"choice", question:"TBILLEQ 函数属于哪一类？", options:["财务函数","外部函数","数学与三角函�?,"其他函数"], answer:0, explanation:"TBILLEQ 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?TBILLEQ 函数的正确功能描述？", options:["返回国库券的等效收益�?,"返回复数的常用对�?,"返回复数的实系数","返回复数的虚系数"], answer:0, explanation:"TBILLEQ 函数的功能是：返回国库券的等效收益率" }
  ],
  "TBILLPRICH": [
    { type:"choice", question:"TBILLPRICH 函数属于哪一类？", options:["其他函数","工程函数","信息函数","数据库函�?], answer:0, explanation:"TBILLPRICH 属于 其他函数�? },
    { type:"choice", question:"以下哪个�?TBILLPRICH 函数的正确功能描述？", options:["返回面值100的国库券的价�?,"返回以mean为平均值，以standard-dev为标准偏差的分布的正态化数值�?,"替换文本内的字符","返回某日期的星期�?], answer:0, explanation:"TBILLPRICH 函数的功能是：返回面值100的国库券的价�? }
  ],
  "TBILLYIELD": [
    { type:"choice", question:"TBILLYIELD 函数属于哪一类？", options:["财务函数","逻辑函数","数学与三角函�?,"日期与时间函�?], answer:0, explanation:"TBILLYIELD 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?TBILLYIELD 函数的正确功能描述？", options:["返回国库券的收益�?,"返回复数的以 2 为底数的对数","返回一次性付息的有价证券到期收回的金额�?,"查看是否满足所有条�?], answer:0, explanation:"TBILLYIELD 函数的功能是：返回国库券的收益率" }
  ],
  "TDIST": [
    { type:"choice", question:"TDIST 函数属于哪一类？", options:["统计函数","数学与三角函�?,"其他函数","外部函数"], answer:0, explanation:"TDIST 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?TDIST 函数的正确功能描述？", options:["返回学生的t分布","通过满足条件的行返回标准偏差","返回相乘平均(几何平均�?","通过满足条件的行返回不偏分散"], answer:0, explanation:"TDIST 函数的功能是：返回学生的t分布" }
  ],
  "TEXT": [
    { type:"choice", question:"TEXT 函数属于哪一类？", options:["文本函数","工程函数","信息函数","逻辑函数"], answer:0, explanation:"TEXT 属于 文本函数�? },
    { type:"choice", question:"以下哪个�?TEXT 函数的正确功能描述？", options:["将数值转换为按指定数字格式表示的文本","将序列号转换为分�?,"如果任一参数为TRUE，则返回TRUE","估算样本方差"], answer:0, explanation:"TEXT 函数的功能是：将数值转换为按指定数字格式表示的文本" }
  ],
  "TIME": [
    { type:"choice", question:"TIME 函数属于哪一类？", options:["日期与时间函�?,"外部函数","数学与三角函�?,"文本函数"], answer:0, explanation:"TIME 属于 日期与时间函数�? },
    { type:"choice", question:"以下哪个�?TIME 函数的正确功能描述？", options:["返回某一特定时间的小数�?,"计算基于给定样本的标准偏差。它与STDEV函数的区别是文本值和逻辑�?TRUE或FALSE)也将参与计算�?,"计算样本总体的方�?,"按照一�?60天的算法,返回两日期间相差的天�?], answer:0, explanation:"TIME 函数的功能是：返回某一特定时间的小数�? }
  ],
  "TIMEVALUE": [
    { type:"choice", question:"TIMEVALUE 函数属于哪一类？", options:["日期与时间函�?,"工程函数","文本函数","数学与三角函�?], answer:0, explanation:"TIMEVALUE 属于 日期与时间函数�? },
    { type:"choice", question:"以下哪个�?TIMEVALUE 函数的正确功能描述？", options:["返回用文本串表示的时间小数�?,"返回参数列表中的最小值，包括数字、文本和逻辑�?,"返回数据集中出现最多的�?,"返回复数的自然对�?], answer:0, explanation:"TIMEVALUE 函数的功能是：返回用文本串表示的时间小数�? }
  ],
  "TINV": [
    { type:"choice", question:"TINV 函数属于哪一类？", options:["统计函数","财务函数","数学与三角函�?,"其他函数"], answer:0, explanation:"TINV 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?TINV 函数的正确功能描述？", options:["返回作为概率和自由度函数的学生氏t分布的t�?,"返回参数的双曲余弦�?,"如果值为一个引用，则返�?TRUE","返回复数的实系数"], answer:0, explanation:"TINV 函数的功能是：返回作为概率和自由度函数的学生氏t分布的t�? }
  ],
  "TODAY": [
    { type:"choice", question:"TODAY 函数属于哪一类？", options:["日期与时间函�?,"查找与引用函�?,"统计函数","其他函数"], answer:0, explanation:"TODAY 属于 日期与时间函数�? },
    { type:"choice", question:"以下哪个�?TODAY 函数的正确功能描述？", options:["返回系统当前日期的序列号","将八进制数转换为二进制数","将数值转换为泰语的货币显示形�?,"返回一次性付息的有价证券到期收回的金额�?], answer:0, explanation:"TODAY 函数的功能是：返回系统当前日期的序列�? }
  ],
  "TRANSPOSE": [
    { type:"choice", question:"TRANSPOSE 函数属于哪一类？", options:["查找与引用函�?,"数学与三角函�?,"工程函数","其他函数"], answer:0, explanation:"TRANSPOSE 属于 查找与引用函数�? },
    { type:"choice", question:"以下哪个�?TRANSPOSE 函数的正确功能描述？", options:["返回区域的转�?,"将按分数表示的美元价格转换为按小数表�?,"返回F概率分布","区分大小�?查看文本位置"], answer:0, explanation:"TRANSPOSE 函数的功能是：返回区域的转置" }
  ],
  "TREND": [
    { type:"choice", question:"TREND 函数属于哪一类？", options:["统计函数","数学与三角函�?,"外部函数","财务函数"], answer:0, explanation:"TREND 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?TREND 函数的正确功能描述？", options:["返回一条线性回归拟合线的一组纵坐标�?y�?","返回列数","返回面值100的国库券的价�?,"计算组合数或二项系数"], answer:0, explanation:"TREND 函数的功能是：返回一条线性回归拟合线的一组纵坐标�?y�?" }
  ],
  "TRIM": [
    { type:"choice", question:"TRIM 函数属于哪一类？", options:["文本函数","信息函数","查找与引用函�?,"其他函数"], answer:0, explanation:"TRIM 属于 文本函数�? },
    { type:"choice", question:"以下哪个�?TRIM 函数的正确功能描述？", options:["除了单词之间的单个空格外，清除文本中的所有的空格","返回参数列表中的最小值，包括数字、文本和逻辑�?,"返回标准正态累积分�?,"将数字向上舍入为最接近的奇型整�?], answer:0, explanation:"TRIM 函数的功能是：除了单词之间的单个空格外，清除文本中的所有的空格" }
  ],
  "TRIMMEAN": [
    { type:"choice", question:"TRIMMEAN 函数属于哪一类？", options:["统计函数","文本函数","数学与三角函�?,"财务函数"], answer:0, explanation:"TRIMMEAN 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?TRIMMEAN 函数的正确功能描述？", options:["返回数据集的内部平均�?,"返回折价发行的面�?100 的有价证券的价格","返回参数算术平均�?,"将十六进制数转换为十进制�?], answer:0, explanation:"TRIMMEAN 函数的功能是：返回数据集的内部平均�? }
  ],
  "TRUNC": [
    { type:"choice", question:"TRUNC 函数属于哪一类？", options:["数学与三角函�?,"文本函数","财务函数","查找与引用函�?], answer:0, explanation:"TRUNC 属于 数学与三角函数�? },
    { type:"choice", question:"以下哪个�?TRUNC 函数的正确功能描述？", options:["将数字的小数部分截去，返回整�?,"删除文本中不能打印的字符","返回满足条件的非空单元格的个�?,"计算给定区域内满足特定条件的单元格的数目"], answer:0, explanation:"TRUNC 函数的功能是：将数字的小数部分截去，返回整数" }
  ],
  "TTEST": [
    { type:"choice", question:"TTEST 函数属于哪一类？", options:["统计函数","外部函数","文本函数","数据库函�?], answer:0, explanation:"TTEST 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?TTEST 函数的正确功能描述？", options:["返回与学生氏-t检验相关的概率","返回国库券的等效收益�?,"计算样本总体的方�?,"Office 365 新函数，在表格中按行或列查找值，支持向左/向右/模糊查找"], answer:0, explanation:"TTEST 函数的功能是：返回与学生�?t检验相关的概率" }
  ],
  "TYPE": [
    { type:"choice", question:"TYPE 函数属于哪一类？", options:["信息函数","外部函数","工程函数","其他函数"], answer:0, explanation:"TYPE 属于 信息函数�? },
    { type:"choice", question:"以下哪个�?TYPE 函数的正确功能描述？", options:["返回数值的类型","将二进制数转换为十六进数","通过满足条件的行返回不偏分散","返回一系列现金流的内部收益�?], answer:0, explanation:"TYPE 函数的功能是：返回数值的类型" }
  ],
  "UPPER": [
    { type:"choice", question:"UPPER 函数属于哪一类？", options:["文本函数","财务函数","数学与三角函�?,"日期与时间函�?], answer:0, explanation:"UPPER 属于 文本函数�? },
    { type:"choice", question:"以下哪个�?UPPER 函数的正确功能描述？", options:["将文本转换成大写形式","返回某日期的星期�?,"将数值转换为按指定数字格式表示的文本","返回一个数字，该数字代表一年中的第几周"], answer:0, explanation:"UPPER 函数的功能是：将文本转换成大写形�? }
  ],
  "VALUE": [
    { type:"choice", question:"VALUE 函数属于哪一类？", options:["文本函数","查找与引用函�?,"数学与三角函�?,"逻辑函数"], answer:0, explanation:"VALUE 属于 文本函数�? },
    { type:"choice", question:"以下哪个�?VALUE 函数的正确功能描述？", options:["将表示数字的文字串转换成数字","将十六进制数转换为十进制�?,"返回满足条件的最小�?,"返回数月前或数月后的月末"], answer:0, explanation:"VALUE 函数的功能是：将表示数字的文字串转换成数�? }
  ],
  "VAR": [
    { type:"choice", question:"VAR 函数属于哪一类？", options:["统计函数","工程函数","数学与三角函�?,"财务函数"], answer:0, explanation:"VAR 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?VAR 函数的正确功能描述？", options:["估算样本方差","将十六进制数转换为十进制�?,"将数字从一个度量系统转换到另一个度量系统中","返回平均偏差"], answer:0, explanation:"VAR 函数的功能是：估算样本方�? }
  ],
  "VARA": [
    { type:"choice", question:"VARA 函数属于哪一类？", options:["统计函数","查找与引用函�?,"外部函数","信息函数"], answer:0, explanation:"VARA 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?VARA 函数的正确功能描述？", options:["用来估算给定样本的方�?,"如果任一参数为TRUE，则返回TRUE","返回数据集的内部平均�?,"返回国库券的收益�?], answer:0, explanation:"VARA 函数的功能是：用来估算给定样本的方差" }
  ],
  "VARP": [
    { type:"choice", question:"VARP 函数属于哪一类？", options:["统计函数","外部函数","逻辑函数","数据库函�?], answer:0, explanation:"VARP 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?VARP 函数的正确功能描述？", options:["计算样本总体的方�?,"返回折价发行的有价证券的年收益率","返回定期付息有价证券的修正期�?,"通过满足条件的行返回分散"], answer:0, explanation:"VARP 函数的功能是：计算样本总体的方�? }
  ],
  "VARPA": [
    { type:"choice", question:"VARPA 函数属于哪一类？", options:["统计函数","信息函数","其他函数","数学与三角函�?], answer:0, explanation:"VARPA 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?VARPA 函数的正确功能描述？", options:["计算样本总体的方�?,"(2003/2000)从枢表中读取数据","如果值为�?#N/A 以外的任何错误值，则返�?TRUE","查看是否满足所有条�?], answer:0, explanation:"VARPA 函数的功能是：计算样本总体的方�? }
  ],
  "VDB": [
    { type:"choice", question:"VDB 函数属于哪一类？", options:["财务函数","信息函数","数学与三角函�?,"逻辑函数"], answer:0, explanation:"VDB 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?VDB 函数的正确功能描述？", options:["使用余额递减法，返回指定期间内或部分期间内的某项资产折旧�?,"返回独立性检验�?,"返回反对数正态分�?,"区分大小�?查看字节位置"], answer:0, explanation:"VDB 函数的功能是：使用余额递减法，返回指定期间内或部分期间内的某项资产折旧�? }
  ],
  "VLOOKUP": [
    { type:"choice", question:"VLOOKUP 函数属于哪一类？", options:["查找与引用函�?,"统计函数","文本函数","外部函数"], answer:0, explanation:"VLOOKUP 属于 查找与引用函数�? },
    { type:"choice", question:"以下哪个�?VLOOKUP 函数的正确功能描述？", options:["在数组第一列中查找，然后在行之间移动以返回单元格的�?,"返回末期付息日不固定的面�?100 的有价证券的价格","返回参数的绝对�?,"返回定期付息有价证券的应计利�?], answer:0, explanation:"VLOOKUP 函数的功能是：在数组第一列中查找，然后在行之间移动以返回单元格的�? }
  ],
  "XLOOKUP": [
    { type:"choice", question:"XLOOKUP 函数属于哪一类？", options:["查找与引用函�?,"逻辑函数","文本函数","数据库函�?], answer:0, explanation:"XLOOKUP 属于 查找与引用函数�? },
    { type:"choice", question:"以下哪个�?XLOOKUP 函数的正确功能描述？", options:["Office 365 新函数，在表格中按行或列查找值，支持向左/向右/模糊查找","返回所有参数的平方�?,"返回满足条件的最小�?,"返回一个数值在一组数值中的排�?如果数据清单已经排过序了，则数值的排位就是它当前的位置)"], answer:0, explanation:"XLOOKUP 函数的功能是：Office 365 新函数，在表格中按行或列查找值，支持向左/向右/模糊查找" }
  ],
  "FILTER": [
    { type:"choice", question:"FILTER 函数属于哪一类？", options:["查找与引用函�?,"日期与时间函�?,"逻辑函数","文本函数"], answer:0, explanation:"FILTER 属于 查找与引用函数�? },
    { type:"choice", question:"以下哪个�?FILTER 函数的正确功能描述？", options:["根据条件筛选数组，返回匹配条件的所有行/列（动态数组函数）","返回数的乘幂结果","产生位于两个指定数值之间的一个随机数，每次重新计算工作表(按F9�?都将返回新的数值�?,"返回协方�?], answer:0, explanation:"FILTER 函数的功能是：根据条件筛选数组，返回匹配条件的所有行/列（动态数组函数）" }
  ],
  "UNIQUE": [
    { type:"choice", question:"UNIQUE 函数属于哪一类？", options:["文本函数","日期与时间函�?,"数学与三角函�?,"财务函数"], answer:0, explanation:"UNIQUE 属于 文本函数�? },
    { type:"choice", question:"以下哪个�?UNIQUE 函数的正确功能描述？", options:["返回数组中的唯一值（去重），Office 365 动态数组函�?,"返回学生的t分布","返回投资在某一给定期间内的本金偿还�?,"产生位于两个指定数值之间的一个随机数，每次重新计算工作表(按F9�?都将返回新的数值�?], answer:0, explanation:"UNIQUE 函数的功能是：返回数组中的唯一值（去重），Office 365 动态数组函�? }
  ],
  "SORT": [
    { type:"choice", question:"SORT 函数属于哪一类？", options:["文本函数","数学与三角函�?,"其他函数","统计函数"], answer:0, explanation:"SORT 属于 文本函数�? },
    { type:"choice", question:"以下哪个�?SORT 函数的正确功能描述？", options:["对数组进行排序，Office 365 动态数组函�?,"返回使累积二项式分布大于等于临界值的最小�?,"返回单元格的信息","返回�?种修正Bessel函数值Kn(x)"], answer:0, explanation:"SORT 函数的功能是：对数组进行排序，Office 365 动态数组函�? }
  ],
  "WEEKDAY": [
    { type:"choice", question:"WEEKDAY 函数属于哪一类？", options:["日期与时间函�?,"文本函数","工程函数","其他函数"], answer:0, explanation:"WEEKDAY 属于 日期与时间函数�? },
    { type:"choice", question:"以下哪个�?WEEKDAY 函数的正确功能描述？", options:["返回某日期的星期�?,"通过实部和虚部构成复�?,"从支持COM自动化的程序中返回实时数据�?,"返回学生的t分布"], answer:0, explanation:"WEEKDAY 函数的功能是：返回某日期的星期数" }
  ],
  "WEEKNUM": [
    { type:"choice", question:"WEEKNUM 函数属于哪一类？", options:["日期与时间函�?,"查找与引用函�?,"其他函数","财务函数"], answer:0, explanation:"WEEKNUM 属于 日期与时间函数�? },
    { type:"choice", question:"以下哪个�?WEEKNUM 函数的正确功能描述？", options:["返回一个数字，该数字代表一年中的第几周","基于一系列定期的现金流和贴现率，返回一项投资的净现�?,"返回用文本串表示的时间小数�?,"返回Pearson乘积矩相关系�?], answer:0, explanation:"WEEKNUM 函数的功能是：返回一个数字，该数字代表一年中的第几周" }
  ],
  "WEIBULL": [
    { type:"choice", question:"WEIBULL 函数属于哪一类？", options:["统计函数","工程函数","外部函数","财务函数"], answer:0, explanation:"WEIBULL 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?WEIBULL 函数的正确功能描述？", options:["返回韦伯分布","返回满足条件的列的平�?,"将十六进制数转换为八进制�?,"返回将来价格"], answer:0, explanation:"WEIBULL 函数的功能是：返回韦伯分�? }
  ],
  "WORKDAY": [
    { type:"choice", question:"WORKDAY 函数属于哪一类？", options:["日期与时间函�?,"财务函数","数学与三角函�?,"统计函数"], answer:0, explanation:"WORKDAY 属于 日期与时间函数�? },
    { type:"choice", question:"以下哪个�?WORKDAY 函数的正确功能描述？", options:["返回指定工作日数之前或之后某日期的序列号","将数值带上美元符号和千位分隔�?,"将八进制数转换为十六进制�?,"返回两个日期之间的全部工作日�?], answer:0, explanation:"WORKDAY 函数的功能是：返回指定工作日数之前或之后某日期的序列�? }
  ],
  "XIRR": [
    { type:"choice", question:"XIRR 函数属于哪一类？", options:["财务函数","逻辑函数","数学与三角函�?,"工程函数"], answer:0, explanation:"XIRR 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?XIRR 函数的正确功能描述？", options:["返回一组不定期发生的现金流的内部收益率","返回一组数据的四分位点","返回参数的反正切�?,"返回某一正数的算术平方根�?], answer:0, explanation:"XIRR 函数的功能是：返回一组不定期发生的现金流的内部收益率" }
  ],
  "XNPV": [
    { type:"choice", question:"XNPV 函数属于哪一类？", options:["财务函数","外部函数","信息函数","工程函数"], answer:0, explanation:"XNPV 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?XNPV 函数的正确功能描述？", options:["返回一组不定期发生的现金流的净现�?,"返回整个样本总体的标准偏差。它反映了样本总体相对于平均�?mean)的离散程度�?,"按给定次数重复文�?,"返回满足条件的列的积"], answer:0, explanation:"XNPV 函数的功能是：返回一组不定期发生的现金流的净现�? }
  ],
  "YEAP": [
    { type:"choice", question:"YEAP 函数属于哪一类？", options:["其他函数","数学与三角函�?,"财务函数","查找与引用函�?], answer:0, explanation:"YEAP 属于 其他函数�? },
    { type:"choice", question:"以下哪个�?YEAP 函数的正确功能描述？", options:["返回某日期的年份。其结果�?900�?999之间的一个整�?,"将按小数表示的美元价格转换为按分数表�?,"返回区域中的值在上下限之间的概率","如果值为文本，则返回 TRUE"], answer:0, explanation:"YEAP 函数的功能是：返回某日期的年份。其结果�?900�?999之间的一个整�? }
  ],
  "YEARFRAC": [
    { type:"choice", question:"YEARFRAC 函数属于哪一类？", options:["日期与时间函�?,"文本函数","逻辑函数","查找与引用函�?], answer:0, explanation:"YEARFRAC 属于 日期与时间函数�? },
    { type:"choice", question:"以下哪个�?YEARFRAC 函数的正确功能描述？", options:["返回start_date和end_date之间的天数占全年天数的百分比","返回复数的指�?,"返回数据点与各自样本均值偏差的平方�?,"返回满足条件的列的积"], answer:0, explanation:"YEARFRAC 函数的功能是：返回start_date和end_date之间的天数占全年天数的百分比" }
  ],
  "YIELD": [
    { type:"choice", question:"YIELD 函数属于哪一类？", options:["财务函数","文本函数","逻辑函数","查找与引用函�?], answer:0, explanation:"YIELD 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?YIELD 函数的正确功能描述？", options:["返回定期付息有价证券的收益率，函数YIELD用于计算债券收益�?,"返回z检验的双尾P�?,"计算指定范围的领域数","返回引用或数组的行数"], answer:0, explanation:"YIELD 函数的功能是：返回定期付息有价证券的收益率，函数YIELD用于计算债券收益�? }
  ],
  "YIELDDISC": [
    { type:"choice", question:"YIELDDISC 函数属于哪一类？", options:["财务函数","外部函数","数学与三角函�?,"数据库函�?], answer:0, explanation:"YIELDDISC 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?YIELDDISC 函数的正确功能描述？", options:["返回折价发行的有价证券的年收益率","区分大小�?查看字节位置","返回年金的各期利率。函数RATE通过迭代法计算得出，并且可能无解或有多个解�?,"返回使累积二项式分布大于等于临界值的最小�?], answer:0, explanation:"YIELDDISC 函数的功能是：返回折价发行的有价证券的年收益�? }
  ],
  "YIELDMAT": [
    { type:"choice", question:"YIELDMAT 函数属于哪一类？", options:["财务函数","文本函数","数据库函�?,"信息函数"], answer:0, explanation:"YIELDMAT 属于 财务函数�? },
    { type:"choice", question:"以下哪个�?YIELDMAT 函数的正确功能描述？", options:["返回到期付息的有价证券的年收益率","从支持COM自动化的程序中返回实时数据�?,"在引用或数组中查找�?,"返回定期付息的面�?100 的有价证券的价格"], answer:0, explanation:"YIELDMAT 函数的功能是：返回到期付息的有价证券的年收益�? }
  ],
  "ZTEST": [
    { type:"choice", question:"ZTEST 函数属于哪一类？", options:["统计函数","数据库函�?,"查找与引用函�?,"文本函数"], answer:0, explanation:"ZTEST 属于 统计函数�? },
    { type:"choice", question:"以下哪个�?ZTEST 函数的正确功能描述？", options:["返回z检验的双尾P�?,"返回成交日和到期日之间的利息应付次数","返回参数列表中的最大值，包括数字、文本和逻辑�?,"返回一次性付息的有价证券到期收回的金额�?], answer:0, explanation:"ZTEST 函数的功能是：返回z检验的双尾P�? }
  ]
};
;
;

const STORAGE_KEY = 'excel_quiz_progress_v1';
function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch(e) {
    return {};
  }
}

function saveProgress(prog) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prog));
}

let quizProgress = loadProgress();
// 结构：{ fnName: { 0: { answered: bool, correct: bool }, 1: {...} } }

function getQuizStats() {
  let total = 0, done = 0, correct = 0, wrong = [];
  Object.keys(QUIZ_DATA).forEach(fn => {
    QUIZ_DATA[fn].forEach((q, i) => {
      total++;
      const rec = (quizProgress[fn] || {})[i];
      if (rec && rec.answered) {
        done++;
        if (rec.correct) correct++; else wrong.push(fn);
      }
    });
  });
  return { total, done, correct, wrong: [...new Set(wrong)] };
}

// ── Tab 切换 ────────────────────────────────────────────────
let currentModalFn = null;
function switchTab(tab) {
  document.querySelectorAll('.modal-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  document.querySelectorAll('.modal-tab-panel').forEach(p => p.classList.toggle('active', p.id === 'panel-' + tab));
  if (tab === 'quiz' && currentModalFn) renderQuizPanel(currentModalFn);
}

// ── 渲染函数卡片时加练习题角�?──────────────────────────────
// �?render() 之后 patch，通过修改 detailBadge 逻辑实现
// （在原始 render 函数里已�?detailBadge，我们在 openModal 里单独处理）

// ── 渲染练习题面�?──────────────────────────────────────────
function renderQuizPanel(fnName) {
  const panel = document.getElementById('quizPanel');
  const qs = QUIZ_DATA[fnName];
  if (!qs || qs.length === 0) {
    panel.innerHTML = '<div style="padding:40px 24px;text-align:center;color:var(--text-muted);">该函数暂无练习题</div>';
    return;
  }
  const prog = quizProgress[fnName] || {};
  const doneCount = Object.values(prog).filter(r => r && r.answered).length;
  const pct = Math.round(doneCount / qs.length * 100);

  let html = `<div class="quiz-progress-wrap">
    <span>完成 ${doneCount}/${qs.length}</span>
    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
    <span>${pct}%</span>
  </div>`;

  qs.forEach((q, idx) => {
    const rec = prog[idx] || {};
    const answered = !!rec.answered;
    const cardClass = answered ? (rec.correct ? 'answered-correct' : 'answered-wrong') : '';
    html += `<div class="quiz-card ${cardClass}" id="qcard-${fnName}-${idx}">`;
    html += `<div class="quiz-q-num">�?${idx+1} �?· ${q.type === 'choice' ? '单选题' : '填空�?}</div>`;
    html += `<div class="quiz-q-text">${escHtml(q.question)}</div>`;

    if (q.type === 'choice') {
      html += `<div class="quiz-options">`;
      const letters = ['A','B','C','D'];
      q.options.forEach((opt, oi) => {
        let cls = '';
        if (answered) {
          if (oi === q.answer) cls = 'show-correct';
          else if (oi === rec.chosen) cls = 'selected-wrong';
        }
        html += `<div class="quiz-option ${cls} ${answered ? 'disabled' : ''}" onclick="${answered ? '' : `chooseOption('${fnName}',${idx},${oi})`}">
          <span class="option-letter">${letters[oi]}</span>
          <span>${escHtml(opt)}</span>
        </div>`;
      });
      html += `</div>`;
    } else {
      const inputVal = answered ? (rec.correct ? q.answer : rec.userInput) : '';
      const inputCls = answered ? (rec.correct ? 'correct' : 'wrong') : '';
      html += `<div class="quiz-fill-wrap">
        <input class="quiz-fill-input ${inputCls}" id="fill-${fnName}-${idx}" type="text"
          value="${escHtml(inputVal)}" placeholder="在此输入答案�? ${answered ? 'readonly' : ''}
          onkeydown="if(event.key==='Enter')submitFill('${fnName}',${idx})">
        <button class="quiz-submit-btn" ${answered ? 'disabled' : ''} onclick="submitFill('${fnName}',${idx})">提交</button>
      </div>`;
    }

    // 解析
    if (answered) {
      const icon = rec.correct ? '�? : '�?;
      const tip = rec.correct ? '回答正确�? : `正确答案�?{q.type === 'choice' ? ['A','B','C','D'][q.answer] + '. ' + q.options[q.answer] : q.answer}`;
      html += `<div class="quiz-explanation show"><span class="quiz-result-icon">${icon}</span><strong>${tip}</strong><br>${escHtml(q.explanation)}</div>`;
    } else {
      html += `<div class="quiz-explanation" id="exp-${fnName}-${idx}"></div>`;
    }

    html += `</div>`;
  });

  // 重置按钮
  if (doneCount > 0) {
    html += `<div style="text-align:center;padding-bottom:8px;"><button class="quiz-reset-btn" onclick="resetFnQuiz('${fnName}')">🔄 重置本函数练�?/button></div>`;
  }

  panel.innerHTML = html;
}

function chooseOption(fnName, idx, chosen) {
  const q = QUIZ_DATA[fnName][idx];
  const correct = chosen === q.answer;
  if (!quizProgress[fnName]) quizProgress[fnName] = {};
  quizProgress[fnName][idx] = { answered: true, correct, chosen };
  saveProgress(quizProgress);
  renderQuizPanel(fnName);
  updateQuizTabBadge(fnName);
}

function submitFill(fnName, idx) {
  const q = QUIZ_DATA[fnName][idx];
  const input = document.getElementById(`fill-${fnName}-${idx}`);
  if (!input) return;
  const userInput = input.value.trim();
  if (!userInput) { input.focus(); return; }
  // 答案比较（忽略空白、忽略大小写�?  const correct = userInput.toLowerCase().replace(/\s/g,'') === q.answer.toLowerCase().replace(/\s/g,'');
  if (!quizProgress[fnName]) quizProgress[fnName] = {};
  quizProgress[fnName][idx] = { answered: true, correct, userInput };
  saveProgress(quizProgress);
  renderQuizPanel(fnName);
  updateQuizTabBadge(fnName);
}

function resetFnQuiz(fnName) {
  if (!confirm(`确认重置 ${fnName} 的练习记录？`)) return;
  delete quizProgress[fnName];
  saveProgress(quizProgress);
  renderQuizPanel(fnName);
  updateQuizTabBadge(fnName);
}

function updateQuizTabBadge(fnName) {
  const qs = QUIZ_DATA[fnName] || [];
  const prog = quizProgress[fnName] || {};
  const done = Object.values(prog).filter(r => r && r.answered).length;
  const badge = document.getElementById('quizTabBadge');
  if (badge) badge.textContent = `${done}/${qs.length}`;
}

// ── 练习中心 ────────────────────────────────────────────────
function openQuizCenter() {
  renderQuizCenter();
  document.getElementById('quizCenter').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeQuizCenter() {
  document.getElementById('quizCenter').classList.remove('open');
  document.body.style.overflow = '';
}
function closeQuizCenterOverlay(e) {
  if (e.target === document.getElementById('quizCenter')) closeQuizCenter();
}

function renderQuizCenter() {
  const stats = getQuizStats();
  const pct = stats.total ? Math.round(stats.done / stats.total * 100) : 0;
  const correctPct = stats.done ? Math.round(stats.correct / stats.done * 100) : 0;

  // 分类统计
  const catStats = {};
  Object.keys(QUIZ_DATA).forEach(fn => {
    const cat = (FUNCTIONS.find(f => f.name === fn) || {}).category || '其他';
    if (!catStats[cat]) catStats[cat] = { total: 0, done: 0 };
    QUIZ_DATA[fn].forEach((q, i) => {
      catStats[cat].total++;
      const rec = (quizProgress[fn] || {})[i];
      if (rec && rec.answered) catStats[cat].done++;
    });
  });

  const catColors = ['#f59e0b','#10b981','#3b82f6','#8b5cf6','#ef4444','#14b8a6'];
  let catHtml = '';
  Object.keys(catStats).forEach((cat, ci) => {
    const s = catStats[cat];
    const p = s.total ? Math.round(s.done / s.total * 100) : 0;
    const col = catColors[ci % catColors.length];
    catHtml += `<div class="qc-cat-row">
      <div class="qc-cat-name">${cat}</div>
      <div class="qc-cat-bar"><div class="qc-cat-bar-fill" style="width:${p}%;background:${col}"></div></div>
      <div class="qc-cat-count">${s.done}/${s.total}</div>
    </div>`;
  });

  const wrongHtml = stats.wrong.length
    ? stats.wrong.map(fn => `<span class="qc-wrong-item" onclick="closeQuizCenter();openModal('${fn}');setTimeout(()=>switchTab('quiz'),100)">${fn}</span>`).join('')
    : '<span class="qc-empty-wrong">🎉 暂无错题，保持！</span>';

  document.getElementById('quizCenterBody').innerHTML = `
    <div class="qc-overview">
      <div class="qc-stat"><div class="val">${stats.total}</div><div class="lbl">题目总数</div></div>
      <div class="qc-stat"><div class="val">${stats.done}</div><div class="lbl">已完�?/div></div>
      <div class="qc-stat"><div class="val">${stats.correct}</div><div class="lbl">答对题数</div></div>
      <div class="qc-stat"><div class="val">${correctPct}%</div><div class="lbl">正确�?/div></div>
    </div>
    <div class="qc-total-bar-wrap">
      <div class="qc-total-label"><span>总体完成进度</span><span>${pct}%�?{stats.done}/${stats.total}�?/span></div>
      <div class="qc-total-bar"><div class="qc-total-bar-fill" style="width:${pct}%"></div></div>
    </div>
    <div class="qc-cat-section"><h3>分类进度</h3><div class="qc-cat-list">${catHtml}</div></div>
    <div class="qc-wrong-section"><h3>错题列表（点击可跳转练习�?/h3><div class="qc-wrong-list">${wrongHtml}</div></div>
  `;
}

// ── 错题�?────────────────────────────────────────────────
function openWrongBook() {
  renderWrongBook();
  document.getElementById('wrongBookModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeWrongBookBtn() {
  document.getElementById('wrongBookModal').classList.remove('open');
  document.body.style.overflow = '';
}
function closeWrongBook(e) {
  if (e.target === document.getElementById('wrongBookModal')) closeWrongBookBtn();
}

function renderWrongBook() {
  const container = document.getElementById('wrongBookBody');
  const wrongItems = [];
  Object.keys(QUIZ_DATA).forEach(fn => {
    QUIZ_DATA[fn].forEach((q, i) => {
      const rec = (quizProgress[fn] || {})[i];
      if (rec && rec.answered && !rec.correct) {
        wrongItems.push({ fn, idx: i, q, rec });
      }
    });
  });

  if (wrongItems.length === 0) {
    container.innerHTML = `<div style="text-align:center;padding:60px 20px;">
      <div style="font-size:3rem;margin-bottom:12px;">🎉</div>
      <h3 style="color:var(--text);margin-bottom:8px;">暂无错题</h3>
      <p style="color:var(--text-muted);font-size:0.875rem;">所有已做题目均答对了，继续保持�?/p>
    </div>`;
    return;
  }

  const fnCount = [...new Set(wrongItems.map(w=>w.fn))].length;
  const stats = `<div style="background:var(--bg);border-radius:10px;padding:14px 16px;margin-bottom:16px;display:flex;align-items:center;gap:16px;flex-wrap:wrap;">
    <div><span style="font-size:1.4rem;font-weight:700;color:#dc2626;">${wrongItems.length}</span><span style="font-size:0.8rem;color:var(--text-muted);margin-left:4px;">道错�?/span></div>
    <div style="font-size:0.85rem;color:var(--text-muted);">来自 ${fnCount} 个函�?/div>
    <button onclick="resetAllWrong()" style="margin-left:auto;padding:6px 14px;background:#fef2f2;border:1px solid #fca5a5;color:#dc2626;border-radius:999px;font-size:0.78rem;cursor:pointer;font-weight:600;">🔄 清空错题�?/button>
  </div>`;

  let cardsHtml = wrongItems.map(({fn, idx, q, rec}) => {
    const meta = CAT_META[(FUNCTIONS.find(f=>f.name===fn)||{}).category] || CAT_META['其他函数'];
    const letters = ['A','B','C','D'];
    let answerDisplay = '';
    if (q.type === 'choice') {
      answerDisplay = `正确答案�?strong>${letters[q.answer]}. ${escHtml(q.options[q.answer])}</strong>`;
      const yourChoice = rec.chosen !== undefined ? `${letters[rec.chosen]}. ${escHtml(q.options[rec.chosen]||'?')}` : '未选择';
      answerDisplay += `<br>你的回答�?span style="color:#dc2626;">${yourChoice}</span>`;
    } else {
      answerDisplay = `正确答案�?strong style="font-family:monospace;">${escHtml(q.answer)}</strong>`;
      answerDisplay += `<br>你的回答�?span style="color:#dc2626;font-family:monospace;">${escHtml(rec.userInput||'')}</span>`;
    }
    return `<div class="quiz-card answered-wrong" style="margin-bottom:12px;">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;flex-wrap:wrap;">
        <span style="font-family:monospace;font-size:0.9rem;font-weight:700;color:${meta.color};cursor:pointer;text-decoration:underline;" onclick="closeWrongBookBtn();setTimeout(()=>{openModal('${fn}');setTimeout(()=>switchTab('quiz'),100)},50)">${fn}</span>
        <span style="font-size:0.72rem;color:var(--text-muted);">�?${idx+1} �?· ${q.type==='choice'?'单选题':'填空�?}</span>
        <button onclick="retryWrongItem('${fn}',${idx})" style="margin-left:auto;padding:3px 10px;background:var(--bg);border:1px solid var(--border);border-radius:999px;font-size:0.75rem;color:var(--text-muted);cursor:pointer;transition:var(--transition);">重做此题</button>
      </div>
      <div class="quiz-q-text" style="font-size:0.85rem;">${escHtml(q.question)}</div>
      <div style="margin-top:10px;padding:10px 14px;background:#fef2f2;border:1px solid #fca5a5;border-radius:8px;font-size:0.82rem;color:var(--text);line-height:1.7;">${answerDisplay}</div>
      <div class="quiz-explanation show" style="margin-top:8px;">💡 ${escHtml(q.explanation)}</div>
    </div>`;
  }).join('');

  container.innerHTML = stats + `<div style="padding:0 2px;">${cardsHtml}</div>`;
}

function retryWrongItem(fn, idx) {
  if (!quizProgress[fn]) return;
  delete quizProgress[fn][idx];
  if (Object.keys(quizProgress[fn]).length === 0) delete quizProgress[fn];
  saveProgress(quizProgress);
  renderWrongBook();
  render();
}

function resetAllWrong() {
  if (!confirm('确认清空所有错题记录（只清除答错的题，答对的保留）�?)) return;
  Object.keys(QUIZ_DATA).forEach(fn => {
    if (!quizProgress[fn]) return;
    QUIZ_DATA[fn].forEach((q, i) => {
      const rec = quizProgress[fn][i];
      if (rec && !rec.correct) delete quizProgress[fn][i];
    });
    if (Object.keys(quizProgress[fn]).length === 0) delete quizProgress[fn];
  });
  saveProgress(quizProgress);
  renderWrongBook();
  render();
}

render();
