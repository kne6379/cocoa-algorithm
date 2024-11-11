import seaborn as sns
import matplotlib.pyplot as plt

# 예제 데이터셋 로드
tips = sns.load_dataset('tips')

# FacetGrid를 이용한 서브플롯 생성
g = sns.FacetGrid(tips, col='time', row='sex')
g.map(plt.scatter, 'total_bill', 'tip')
plt.show()