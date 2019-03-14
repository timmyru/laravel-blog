@extends ('admin.layouts.app_admin')
@section('content')
    <div class="container">
        @component('admin.components.breadcrumps')
            @slot('title') Список категорий @endslot
            @slot('parent') Главная @endslot
            @slot('active') Категории @endslot
        @endcomponent

        <hr>

        <a href="{{route('admin.category.create')}}" class="btn btn-primary pull-right"><i class="fa fa-plus-square-o" style="margin-right: 5px; vertical-align: middle"></i>
        <span style="vertical-align: middle">Создать категорию</span></a>

        <table class="table table-striped">
            <thead>
            <th>Наименование</th>
            <th>Публикация</th>
            <th class="text-right">Действие</th>
            </thead>
            <tbody>
                @forelse($categories as $category)
                    <tr>
                        <td>{{$category->title}}</td>
                        <td>{{$category->published}}</td>
                        <a href="{{route('admin.category.edit', ['id'=>$category->id])}}"><i class="fa fa-edit"></i></a>
                    </tr>
                @empty
                    <tr>
                        <td colspan="3" class="text-center">
                            <h2>Данные отсутствуют</h2>
                        </td>
                    </tr>
                @endforelse
            </tbody>
            <tfoot>
                <ul class="pagination pull-right">
                    {{$categories->links()}}
                </ul>
            </tfoot>
        </table>
    </div>
@endsection