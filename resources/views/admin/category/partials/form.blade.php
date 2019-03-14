<label for="">Статус</label>
<select class="form-control" name="published" id="">
    @if(isset($category->id))
        <option value="0" @if ($category->published == 0) selected="" @endif>Опубликовано</option>
        <option value="1" @if ($category->published == 1) selected="" @endif>Не опубликовано</option>
    @else
        <option value="0">Опубликовано</option>
        <option value="1">Не опубликовано</option>
    @endif
</select>

<label for="">Наименование</label>
<input type="text" class="form-control" name="title" placeholder="Заголовок категории" required>

<label for="">Slug</label>
<input type="text" class="form-control" placeholder="Автоматическая генерация" readonly>

<label for="parent_id">Родительская категория</label>
<select class="form-control" name="parent_id" id="parent_id">
    <option value="0">-- без родительской категории --</option>
    @include('admin.category.partials.categories', ['categories' => $categories])
</select>

<hr>

<input type="submit" class="btn btn-primary" value="Сохранить">