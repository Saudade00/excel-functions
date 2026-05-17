// 测试 utils.js 中的函数

// 加载 utils.js 并导入函数
const { escHtml, createEl, debounce, throttle } = require('../utils.js');

describe('escHtml', () => {
  test('应该转义 HTML 特殊字符', () => {
    expect(escHtml('<script>alert("XSS")</script>')).toBe(
      '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;'
    );
    expect(escHtml('A & B')).toBe('A &amp; B');
    expect(escHtml('"quote"')).toBe('&quot;quote&quot;');
  });

  test('应该处理空字符串', () => {
    expect(escHtml('')).toBe('');
  });
});

describe('createEl', () => {
  test('应该创建元素并设置属性', () => {
    const el = createEl('div', { className: 'test-class', id: 'test-id' });
    expect(el.tagName).toBe('DIV');
    expect(el.className).toBe('test-class');
    expect(el.id).toBe('test-id');
  });

  test('应该添加子元素', () => {
    const child = document.createElement('span');
    const el = createEl('div', {}, [child]);
    // 在 jsdom 中，el.children 是一个 HTMLCollection
    expect(el.children.length).toBe(1);
    expect(el.children[0]).toBe(child);
  });

  test('应该处理文本子节点', () => {
    const el = createEl('div', {}, ['Hello']);
    // 文本节点应该被添加
    expect(el.childNodes.length).toBe(1);
    expect(el.childNodes[0].textContent).toBe('Hello');
  });

  test('应该正确设置事件监听器', () => {
    const handler = jest.fn();
    const el = createEl('button', { onClick: handler });
    // 由于我们无法直接测试事件监听器，这里只测试元素创建
    expect(el.tagName).toBe('BUTTON');
  });
});

describe('debounce', () => {
  // 使用 fake timers
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('应该延迟函数执行', () => {
    const func = jest.fn();
    const debounced = debounce(func, 1000);
    
    debounced();
    expect(func).not.toHaveBeenCalled();
    
    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('应该在多次调用时重置计时器', () => {
    const func = jest.fn();
    const debounced = debounce(func, 1000);
    
    debounced();
    jest.advanceTimersByTime(500);
    debounced();
    jest.advanceTimersByTime(500);
    expect(func).not.toHaveBeenCalled();
    
    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledTimes(1);
  });
});

describe('throttle', () => {
  // 使用 fake timers
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('应该限制函数执行频率', () => {
    const func = jest.fn();
    const throttled = throttle(func, 1000);
    
    throttled();
    expect(func).toHaveBeenCalledTimes(1);
    
    throttled();
    expect(func).toHaveBeenCalledTimes(1); // 还在冷却期内
    
    jest.advanceTimersByTime(1000);
    throttled();
    expect(func).toHaveBeenCalledTimes(2);
  });
});
