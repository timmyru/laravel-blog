@extends ('admin.layouts.app_admin')

@section('content')
    <div class="container">
        @component('admin.components.breadcrumps')
            @slot('title') Создание категории @endslot
            @slot('parent') Главная @endslot
            @slot('active') Категории @endslot
        @endcomponent

            <hr>

            <form action="{{route('admin.category.store')}}" class="form-horizontal" method="POST">
                @csrf
                @include('admin.category.partials.form')
            </form>
    </div>
@endsection